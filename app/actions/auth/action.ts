"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/schemas";
import { RegisterSchema } from "@/schemas";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { LingoletteClient } from "@/lib/lingolette";

// const LingoletteClient = new Lingolette(
//   process.env.LINGOLETTE_AUTH_ID ?? "",
//   process.env.LINGOLETTE_AUTH_SECRET ?? ""
// );

export type LingoletteCreateUserType = {
  name: string; // — user displayed name,
  targetLng: string; // — target language code,
  nativeLng: string; // — native language code,
  languageLevel: number; // — level user is at,
  id: string; // — user id used to access this user,
  createdAt: Date; // — date of user creation,
};

interface User {
  id: string;
  name: string | null;
  email: string;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
  course: string | null;
  client_description: string | null;
  grammatical_gender: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
}

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    let errorMessage = "";
    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }
  const { email, password } = validatedFields.data;
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });
  try {
    if (existingUser) {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        // redirectTo: DEFAULT_LOGIN_REDIRECT,
      });

      return {
        success: "Log In Successful",
      };
    } else {
      return {
        error: "Sign Up Required",
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    let errorMessage = "";
    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      await signIn("credentials", {
        name: name,
        email: email,
        password: hashedPassword,
        // redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
      return {
        success: "User Created",
      };
    } else {
      return {
        error: "User already exists",
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credentials Error" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};

// SIGN UP FOR USEDAWN IMPLEMENTATION

// export const signup = async (formData: FormData) => {
//   let user = null;
//   const credentials = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };

//   const validatedFields = RegisterSchema.safeParse(credentials);
//   if (!validatedFields.success) {
//     let errorMessage = "";
//     validatedFields.error.issues.forEach((issue) => {
//       errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
//     });
//     return {
//       error: errorMessage,
//     };
//   }
//   const { email, password } = validatedFields.data;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   try {
//     const existingUser = await db.user.findUnique({
//       where: {
//         email,
//       },
//     });
//     if (existingUser) {
//       return {
//         error: "User Account Exists",
//       };
//     } else {
//       user = (await signIn("credentials", {
//         email,
//         password: hashedPassword,
//         redirectTo: DEFAULT_LOGIN_REDIRECT,
//       })) as User;
//       if (user !== null) {
//         await db.user.update({
//           where: {
//             id: user.id,
//           },
//           data: {
//             client_description: formData.get("client_description") as string,
//             course: formData.get("course") as string,
//           },
//         });
//       }
//       return {
//         success: "User Created",
//       };
//     }
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { error: "Credentials Error" };
//         default:
//           return { error: "Something went wrong!" };
//       }
//     }
//     throw error;
//   }
//   revalidatePath("/", "layout");
//   redirect("/loading");
// };
