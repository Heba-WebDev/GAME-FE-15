// import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    // Credentials({
    //     credentials:{
    //         email: {},
    //         password: {},
    //     },
    //     authorize: async(credentials, req) => {

    //     }
    // })
  ],
  secret: process.env.AUTH_SECRET
};
