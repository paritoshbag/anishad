// /api/admin/addtest
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        if (body.method == "POST") {
            const { method, servicename, category, servicedescription, ourfacility, serviceimage } = body;
            const newService = await prisma.services.create({
                data: {
                    name: servicename,
                    category: category,
                    description: servicedescription,
                    facility: ourfacility,
                    image: serviceimage,

                }
            });
            return NextResponse.json(newService);
        }
        if (body.method == "DELETE") {
            const { id } = body;
            const existingService = await prisma.services.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            // If the test exists, proceed with the deletion
            const deletedService = await prisma.services.delete({
                where: {
                    id: id,
                },
            });

            return NextResponse.json(deletedService);
        }
        if (body.method == "FIND") {
            const { id } = body;
            const existingService = await prisma.services.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }

            return NextResponse.json(existingService);
        }
        if (body.method == "UPDATE") {
            const { id, method, servicename, category, servicedescription, ourfacility, serviceimage } = body;

            // Check if the test with the given ID exists
            const existingService = await prisma.services.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }

            // Update the test data
            const updatedService = await prisma.services.update({
                where: {
                    id: id,
                },
                data: {
                    name: servicename,
                    category: category,
                    description: servicedescription,
                    facility: ourfacility,
                    image: serviceimage,
                },
            });

            return NextResponse.json(updatedService);
        }


    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};
export const GET = async () => {
    try {
        const fetchServicedb = await prisma.services.findMany(); // Assuming you have a 'customers' table in your database
        return NextResponse.json(fetchServicedb);
    } catch (err) {
        return NextResponse.json({ message: "GET Error", error: err }, { status: 500 });
    }
};