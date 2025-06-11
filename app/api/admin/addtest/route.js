// /api/admin/addtest
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        if (body.method == "POST") {
            const { method, testTitle, testName, testType, preTestInfo, reportDelivery, testPrice, testDescription, featuretest, testConfiguration, testSlide } = body;
            const newTest = await prisma.testdb.create({
                data: {
                    title: testTitle,
                    name: testName,
                    type: testType,
                    info: preTestInfo,
                    delivery: reportDelivery,
                    price: parseInt(testPrice),
                    description: testDescription,
                    configuration: testConfiguration,
                    featured: featuretest,
                    slide: testSlide

                }
            });
            return NextResponse.json(newTest);
        }
        if (body.method == "DELETE") {
            const { id } = body;
            const existingTest = await prisma.testdb.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingTest) {
                return NextResponse.json({ message: "Test not found" }, { status: 404 });
            }
            // If the test exists, proceed with the deletion
            const deletedTest = await prisma.testdb.delete({
                where: {
                    id: id,
                },
            });

            return NextResponse.json(deletedTest);
        }
        if (body.method == "FIND") {
            const { id } = body;
            const existingTest = await prisma.testdb.findUnique({
                where: {
                    id: id,
                },
            });

            if (!existingTest) {
                return NextResponse.json({ message: "Test not found" }, { status: 404 });
            }

            return NextResponse.json(existingTest);
        }
        if (body.method == "UPDATE") {
            const { id, testTitle, testName, testType, preTestInfo, reportDelivery, testPrice, testDescription, featuretest, testConfiguration, testSlide } = body;
        
            // Check if the test with the given ID exists
            const existingTest = await prisma.testdb.findUnique({
                where: {
                    id: id,
                },
            });
        
            if (!existingTest) {
                return NextResponse.json({ message: "Test not found" }, { status: 404 });
            }
        
            // Update the test data
            const updatedTest = await prisma.testdb.update({
                where: {
                    id: id,
                },
                data: {
                    title: testTitle,
                    name: testName,
                    type: testType,
                    info: preTestInfo,
                    delivery: reportDelivery,
                    price: parseInt(testPrice),
                    description: testDescription,
                    configuration: testConfiguration,
                    featured: featuretest,
                    slide: testSlide,
                },
            });
        
            return NextResponse.json(updatedTest);
        }
        

    } catch (err) {
        return NextResponse.json({ message: "POST Error", error: err }, { status: 501 });
    }
};
export const GET = async () => {
    try {
        const fetchTestdb = await prisma.testdb.findMany(); // Assuming you have a 'customers' table in your database
        return NextResponse.json(fetchTestdb);
    } catch (err) {
        return NextResponse.json({ message: "GET Error", error: err }, { status: 500 });
    }
};