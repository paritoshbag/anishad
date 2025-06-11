"use client"
import {
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import useDownloader from 'react-use-downloader';
import { generatePDF } from './generatePDF';

export default function ReportDownload() {
    const [patentreport, setPatentReport] = useState([]);
    const [mobileno, setMobileno] = useState(null);
    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } = useDownloader();
    /////Download/////
    const backgroundImagePath = '/img.png'; // Adjust the path based on your project structure
    const secondPageImagePath = '/img2.jpg'; // Adjust the path based on your project structure

    const handleDownloadPDF = async (contentImagePath, withheader) => {
        // if (withheader) {
            const pdf = await generatePDF(contentImagePath, backgroundImagePath, secondPageImagePath, withheader);
            pdf.save('my-report.pdf');
        // } 
        // else {
        //     // Replace .jpg with .pdf in the URL
        //     const pdfUrl = contentImagePath.replace('.jpg', '.pdf');
    
        //     // Download the PDF file
        //     try {
        //         const response = await fetch(pdfUrl);
        //         const blob = await response.blob();
        //         const url = window.URL.createObjectURL(blob);
        //         const a = document.createElement('a');
        //         a.href = url;
        //         a.download = 'my-file.pdf'; // You can change the filename here if needed
        //         document.body.appendChild(a);
        //         a.click();
        //         window.URL.revokeObjectURL(url); // Release the object URL
        //         document.body.removeChild(a);
        //     } catch (error) {
        //         console.error('Error downloading file:', error);
        //     }
        // }
    };
    
    
    /////Download/////
    const FetchReport = async (item) => {
        if (mobileno) {
            try {
                const response = await axios.post('/api/admin/report', {
                    method: 'FINDBYMOB', // Include a method field to indicate it's a delete operation
                    mobile: mobileno,
                });
                if (response.status === 200) {
                    // The test has been successfully deleted
                    // updateFetch();
                    // mutate();
                    setPatentReport(response.data)
                    console.log(response.data)
                } else {
                    const data = response.data;
                    console.error('Error :', data.message);
                }

            } catch (error) {
                console.log('Error:', error)
            }
        }
    }
    return (
        <Stack
            as={Container}
            maxW={'container.xl'}
            // minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack gap={4} p={4}>
                <Input width={''} placeholder='Enter Your Mobile No' onChange={(e) => setMobileno(e.target.value)} />
                <Button width={''} colorScheme='red' onClick={() => FetchReport()}>Submit</Button>
            </Stack>
            {patentreport.length > 0 ?
                <Stack
                    as={Container}
                    maxW={'container.2xl'}
                >
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Patient Name</Th>
                                    <Th>Date</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {patentreport.map((item) => {
                                    const mylink = item.file;

                                    // Replace 'http' with 'https'
                                    const updatedLink = mylink.replace(/^http:/, 'https:');
                                    const finalLink = updatedLink.replace(/\.pdf$/, '.jpg');
                                    const originalDateString = item.date;
                                    const originalDate = new Date(originalDateString);

                                    const day = originalDate.getDate().toString().padStart(2, "0");
                                    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
                                    const year = originalDate.getFullYear();

                                    const formattedDate = `${day}-${month}-${year}`;
                                    return (
                                        <Tr key={item.id}>
                                            <Td>{item.name}</Td>
                                            <Td>{formattedDate}</Td>
                                            <Td>
                                                {/* <Button size={'sm'} colorScheme='red' onClick={() => console.log(updatedLink)}>Download</Button> */}
                                                {/* <Button size={'sm'} colorScheme='red' onClick={() => download(updatedLink, item.name+'.pdf')}>Download</Button> */}
                                                {/* <Button size={'sm'} colorScheme='red' onClick={() => handleDownloadPDF(updatedLink)}>Download</Button> */}
                                                <Button size={'sm'} colorScheme='red' onClick={() => handleDownloadPDF(finalLink, item.withheader)}>Download</Button>
                                            </Td>
                                        </Tr>
                                    )
                                })}

                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Patient Name</Th>
                                    <Th>Date</Th>
                                    <Th></Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Stack>
                : null}
        </Stack>
    )
}
