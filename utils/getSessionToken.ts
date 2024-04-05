// Assuming the Lingolette class and its methods are defined in a TypeScript file
import { Lingolette } from "../lib/lingolette";

// Initialize the Lingolette API client with your credentials
const api = new Lingolette(
  process.env.NEXT_PUBLIC_LINGOLETTE_AUTH_ID || "", // Replace with your username
  process.env.LINGOLETTE_AUTH_SECRET || "" // Replace with your API secret
);

// Define an interface for the API response
interface ApiResponse {
  data?: {
    token?: string;
  };
}

// Function to get a session token for a user
export async function getSessionToken(userId: string): Promise<string | null> {
  try {
    const result: ApiResponse = await api.call("org", "createUserSession", {
      userId: userId,
    });
    // console.log(result);
    return result.data?.token || null;
  } catch (error) {
    console.error("createUserSession API error:", error);
    return null;
  }
}

// Example usage
// (async () => {
//   const userId = ""; // Replace with the user ID you want to get a session token for
//   const sessionToken = await getSessionToken(userId);
//   console.log("Session token:", sessionToken);
// })();
