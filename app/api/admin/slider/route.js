// /api/admin/slider
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        if (body.method == "POST") {
            const { method, slidername,sliderimage, sliderlink } = body;
            const newSlider = await prisma.homeslider.create({
                data: {
                    name: slidername,
                    image: sliderimage,
                    link: sliderlink

                }
            });
            return NextResponse.json(newSlider);
        }
        if (body.method == "DELETE") {
            const { id } = body;
            const existingSlider = await prisma.homeslider.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingSlider) {
                return NextResponse.json({ message: "Slider not found" }, { status: 404 });
            }
            // If the test exists, proceed with the deletion
            const deletedSlider = await prisma.homeslider.delete({
                where: {
                    id: id,
                },
            });

            return NextResponse.json(deletedSlider);
        }
        if (body.method == "FIND") {
            const { id } = body;
            const existingSlider = await prisma.homeslider.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingSlider) {
                return NextResponse.json({ message: "Slider not found" }, { status: 404 });
            }

            return NextResponse.json(existingSlider);
        }
        if (body.method == "UPDATE") {
            const { id,sliderimage, sliderlink, slidername } = body;

            // Check if the test with the given ID exists
            const existingSlider = await prisma.homeslider.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingSlider) {
                return NextResponse.json({ message: "Slider not found" }, { status: 404 });
            }

            // Update the test data
            const updatedSlider = await prisma.homeslider.update({
                where: {
                    id: id,
                },
                data: {
                    name: slidername,
                    image: sliderimage,
                    link: sliderlink
                },
            });

            return NextResponse.json(updatedSlider);
        }


    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};
export const GET = async () => {
    try {
        const fetchSliderdb = await prisma.homeslider.findMany(); // Assuming you have a 'customers' table in your database
        return NextResponse.json(fetchSliderdb);
    } catch (err) {
        return NextResponse.json({ message: "GET Error", error: err }, { status: 500 });
    }
};