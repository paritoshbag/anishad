// /api/admin/patient
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        if (body.method == "POST") {
            const { method, patientname, patientphone, patientReport,withletterhead } = body;
            const newPatient = await prisma.download.create({
                data: {
                    name: patientname,
                    phone: patientphone,
                    file: patientReport,
                    withheader: withletterhead

                }
            });
            return NextResponse.json(newPatient);
        }
        if (body.method == "DELETE") {
            const { id } = body;
            const existingPatient = await prisma.download.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingPatient) {
                return NextResponse.json({ message: "patient not found" }, { status: 404 });
            }
            // If the test exists, proceed with the deletion
            const deletedpatient = await prisma.download.delete({
                where: {
                    id: id,
                },
            });

            return NextResponse.json(deletedpatient);
        }
        if (body.method == "FIND") {
            const { id } = body;
            const existingPatient = await prisma.download.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingPatient) {
                return NextResponse.json({ message: "patient not found" }, { status: 404 });
            }

            return NextResponse.json(existingPatient);
        }
        if (body.method == "FINDBYMOB") {
            const { mobile } = body;
            const existingPatient = await prisma.download.findMany({
                where: {
                    phone: mobile,
                },
            });

            if (!existingPatient) {
                return NextResponse.json({ message: "patient not found" }, { status: 404 });
            }

            return NextResponse.json(existingPatient);
        }
        if (body.method == "UPDATE") {
            const { id, patientname, patientphone, patientReport,withletterhead  } = body;

            // Check if the test with the given ID exists
            const existingPatient = await prisma.download.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingPatient) {
                return NextResponse.json({ message: "patient not found" }, { status: 404 });
            }

            // Update the test data
            const updatedpatient = await prisma.download.update({
                where: {
                    id: id,
                },
                data: {
                    name: patientname,
                    phone: patientphone,
                    file: patientReport,
                    withheader: withletterhead
                },
            });

            return NextResponse.json(updatedpatient);
        }


    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};
export const GET = async () => {
    try {
        const fetchpatientdb = await prisma.download.findMany(); // Assuming you have a 'customers' table in your database
        return NextResponse.json(fetchpatientdb);
    } catch (err) {
        return NextResponse.json({ message: "GET Error", error: err }, { status: 500 });
    }
};