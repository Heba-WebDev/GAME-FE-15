// import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios, { HttpStatusCode } from "axios";
import { LoginSchema } from "./schemas";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    Credentials({
      id: "credentials",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Email",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "john@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials, req) => {
        const validatedvalues = LoginSchema.safeParse(credentials);
        console.log(validatedvalues.data);
        if (!validatedvalues.success) {
          return { error: "invalid credentials" };
        }
        const res = await axios
          .post(
            "https://game-be-15.onrender.com/api/v1/players/login",
            {
              email: validatedvalues.data.email,
              password: validatedvalues.data.password,
            },
            {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === HttpStatusCode.Ok) {
              const user = res.data;

              // checks if response is ok and data is retrieved
              if (user) {
                const userData = {
                  data: {
                    id: user.data.id,
                    display_name: user.data.display_name,
                    email: user.data.email,
                    avatar: user.data.avatar,
                    country: user.data.country,
                    games_played: user.data.games_played,
                    games_won: user.data.games_won,
                    points: user.data.points,
                    ranking: user.data.ranking,
                  },
                  token: user.token,
                };
                return { userData };
              }
              // Return null if user data could not be retrieved
              else {
                return (null);
              }
            }
          })
          .catch((error) => {
            console.log(error.response.data.message);
            throw new Error(error.response.data.message);
          });
        return res.userData;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signUp: "/auth/register",
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  //added secret
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session?.user) {
        token.user = session.user;
        token.access_token = session.token;
        return token;
      }

      if (user) {
        token.user = user.data;
        token.access_token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.token = token.access_token;
      return session;
    },
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light
    backgroundColor: "red",
    brandColor: "", // Hex color code #33FF5D
    logo: "/app_logo.png", // Absolute URL to image
  },
};
