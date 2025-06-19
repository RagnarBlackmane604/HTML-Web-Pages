import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
       
        if (
          credentials?.username === "admin" &&
          credentials?.password === "password"
        ) {
         
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
            role: "manager", 
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      
      if (token?.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
