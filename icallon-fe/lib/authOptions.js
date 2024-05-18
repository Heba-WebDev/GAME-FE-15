// import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios, { HttpStatusCode } from "axios";


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
         const res = await axios
          .post(
            "https://game-be-15.onrender.com/api/v1/players/login",
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log('status code', res.status);
            if (res.status === HttpStatusCode.Ok) {
              const user = res.data;

              // checks if response is ok and data is retrieved
              if (user) {
                const userData = {
                  data: {
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
                return {userData};
              }
              // Return null if user data could not be retrieved
              else {
                return (null);
              }
            }
          })
          .catch((error) => {
            throw new Error(error.response.data.message);
          });
          
          return res.userData
      },
    }),
  ],
  //added secret
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
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
