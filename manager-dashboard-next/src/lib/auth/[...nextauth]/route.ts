import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function yourUserCheckFunction(username: string, password: string) {
  if (username === "admin" && password === "password") {
    return { id: "1", name: "Admin User", email: "admin@example.com", role: "manager" };
  }
  return null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { username: { label: "Username", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await yourUserCheckFunction(credentials.username, credentials.password);
        if (user) return user;
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?.role && session.user) session.user.role = token.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
