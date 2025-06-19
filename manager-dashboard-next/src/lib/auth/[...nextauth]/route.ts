import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { username: { label: "Username", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
       
        const user = await yourUserCheckFunction(credentials.username, credentials.password);
        if (user) return user;
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
