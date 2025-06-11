
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prisma";
// import bcrypt from "bcrypt";

export const authOptions = {


    debug: process.env.NODE_ENV === "development",
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            nname: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@mail.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials.email || !credentials.password) {
                    throw new Error("Email and password required");
                }
                try {
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                    });
                    if (!user) {
                        throw new Error("User does not exist");
                    }

                    // const isCorrectPasword = await bcrypt.compare(
                    //     'sujan123',
                    //     user.hashedPassword
                    // );

                    // if (!isCorrectPasword) {
                    //     throw new Error("Incorrect password");
                    // }
                    if (credentials.password !== user.hashedPassword) {
                        throw new Error("Incorrect password");
                    }
                    const { hashedPassword, ...userdata } = user;
                    return userdata;

                } catch (error) {
                    throw new Error(error.message);
                }
            }
        }),
    ],
    // pages: {
    //     signIn: "/api/auth/signin",
    //     // signOut: "/auth/signout",
    //     error: "/auth/error", // Error code passed in query string as ?error=
    //     // verifyRequest: "/auth/verify-request", // (used for check email message)
    //     // newUser: "/auth/new-user",
    // },
    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.role = user.role;
                token.userId = user.id;
                token.phone = user.phone;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            if (token) {
                session.user.role = token.role;
                session.user.id = token.userId;
                session.user.phone = token.phone;
            }
            return session;
        },
    },
}