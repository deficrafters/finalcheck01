
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './src/lib/mongodb';
import initDB from './src/helper/initDB';

initDB(); 

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback - User:", user);
      console.log("SignIn Callback - Account:", account);
      console.log("SignIn Callback - Profile:", profile);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect Callback - URL:", url);
      console.log("Redirect Callback - Base URL:", baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      console.log("Session Callback - Session:", session);
      console.log("Session Callback - Token:", token);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT Callback - Token:", token);
      console.log("JWT Callback - User:", user);
      console.log("JWT Callback - Account:", account);
      console.log("JWT Callback - Profile:", profile);
      console.log("JWT Callback - Is New User:", isNewUser);
      return token;
    }
  }
});

export default handler;