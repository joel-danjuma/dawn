import https from "https";
import crypto from "crypto";

const API_HOST = "lingolette.com";
const API_VERSION = 1;

interface ApiResponse {
  data?: {
    token?: string;
  };
}

class Lingolette {
  username: string;
  apiSecret: string;

  constructor(username: string, apiSecret: string) {
    this.username = username;
    this.apiSecret = apiSecret;
  }

  async call(
    endpoint: string,
    method: string,
    payload: { [key: string]: any } | undefined = undefined
  ): Promise<ApiResponse> {
    const random = crypto.randomBytes(32).toString("hex"),
      payloadString = JSON.stringify({ method, data: payload }),
      hash = crypto
        .createHmac("sha256", this.apiSecret)
        .update(random)
        .digest("hex");

    const options: https.RequestOptions = {
      method: "POST",
      headers: {
        "Content-Length": payloadString.length.toString(),
        "Content-Type": "application/json",
        "x-api-version": API_VERSION.toString(),
        "x-random": random,
        "x-auth-id": this.username,
        "x-auth-key": hash,
      },
    };

    return new Promise((resolve, reject) => {
      const req = https.request(
        `https://${API_HOST}/api/${endpoint}`,
        options,
        (res) => {
          let data = "";

          res.on("data", (chunk) => (data += chunk));
          res.on("error", (e) => reject(e));
          res.on("end", () => resolve(JSON.parse(data)));
        }
      );

      req.write(payloadString);
      req.end();
    });
  }
}


const  LingoletteClient = new Lingolette(process.env.LINGOLETTE_AUTH_ID ?? "", process.env.LINGOLETTE_AUTH_SECRET ?? "");
export { LingoletteClient, Lingolette };
