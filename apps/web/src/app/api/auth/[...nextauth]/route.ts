import { authOptions } from "@autospacce/network/src/config/auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
