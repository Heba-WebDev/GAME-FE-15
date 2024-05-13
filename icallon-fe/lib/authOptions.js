// import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      authorize: async (credentials, req) => {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

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
        if (res.ok && user) {
          return user;
        }
         // Return null if user data could not be retrieved
         return null
      },
    }),
  ],
  //added secret
  secret: process.env.AUTH_SECRET,
  theme: {
    colorScheme: 'light', // "auto" | "dark" | "light
    backgroundColor:'red',
    brandColor: '', // Hex color code #33FF5D
    logo: '/app_logo.png', // Absolute URL to image
  },
};
