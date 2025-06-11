import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        const { name, email, hashedPassword } = body;
        // if (form == "adduser") {
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                hashedPassword: hashedPassword,

            }
        });
        return NextResponse.json(newUser);
        // }

    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};
// export const GET = async () => {
//     try {
//         const fetchUser = await prisma.user.findMany(); // Assuming you have a 'customers' table in your database
//         return NextResponse.json(fetchUser);
//     } catch (err) {
//         return NextResponse.json({ message: "GET Error", error: err }, { status: 500 });
//     }
// };