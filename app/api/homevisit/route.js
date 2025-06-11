
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, email, phone, testname } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `Home Visit submission from ${name}`,
            html: `<p>You have a Home Visit form submission</p><br>
                <p><strong>Name: </strong> ${name}</p><br>
                <p><strong>Email: </strong> ${email}</p><br>
                <p><strong>Phone: </strong> ${phone}</p><br>
                <p><strong>Testname: </strong> ${testname}</p><br>
              `,
        });
        return NextResponse.json({ success: true });
        // }

    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
}