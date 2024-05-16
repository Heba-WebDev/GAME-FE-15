// import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

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
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        // try {
        //   const user = await axios.post("https://game-be-15.onrender.com/api/v1/players/login",
        // {
        //   user: {
        //     password: credentials.password,
        //     email: credentials.email
        //   }
        // },
        // {
        //   headers: {
        //     accept: '*/*',
        //     'Content-Type': 'application/json'
        //   }
        // })
        // } catch (error) {

        // }
        const res = await fetch(
          "https://game-be-15.onrender.com/api/v1/players/login",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const user = await res.json();
        if (!res.ok) {
          throw new Error(user.message);
        }
        // checks if response is ok and data is retrieved
        else if (res.ok && user) {
          console.log(user.data);
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
          console.log(userData);
          return userData;
          // return {status: 'success', data: user.data}
        }
        // Return null if user data could not be retrieved
        else {
          return null;
        }
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
