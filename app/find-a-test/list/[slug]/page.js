"use client"
import {
    Container,
    Heading,
    Image,
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
    Flex,
    Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { chakra } from '@chakra-ui/react'
import { InfoIcon, SettingsIcon, TimeIcon } from "@chakra-ui/icons";
import { BiTestTube } from "react-icons/bi";

export default function TestListPage({ params }) {
    const [testData, settestData] = useState()
    const FetchService = async (testId) => {
        try {
            const response = await axios.post('/api/admin/addtest', {
                method: 'FIND', // Include a method field to indicate it's a delete operation
                id: testId,
            });
            if (response.status === 200) {
                settestData(response.data)
            } else {
                const data = response.data;
                console.error('Error :', data.message);
            }

        } catch (error) {
            console.log('Error:', error)
        }
    }
    useEffect(() => {
        FetchService(params.slug)
    }, [])
    console.log(testData)
    if (!testData) {
        return (
            <Stack
                as={Container}
                maxW={'container.xl'}
                mt={5}
                mb={5}
                alignItems={'center'}
                justify={'center'}
                alignContent={'center'}
            >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#e1272c'
                    size='xl'
                />
            </Stack>
        )
    }
    return (
        <Stack
            as={Container}
            maxW={'container.xl'}
            mt={5}
            mb={5}
        >
            <Stack justify={'space-between'} flexDir={['column', 'column', 'row', 'row', 'row']}>

                <Stack mb={10}>
                    <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} >Test <chakra.span color={'#e1272c'}>Details</chakra.span></Heading>
                    <Text fontSize={'27px'} color={'#e1272c'}>{testData.title || ""}</Text>
                </Stack>
                <Text fontSize={'30px'} fontWeight={'bold'} color={'#e1272c'}>₹ {testData.price || ""}</Text>
            </Stack>
            <Stack mb={10}>
                <Text dangerouslySetInnerHTML={{
                    __html: testData.description || "",
                }}/>
            </Stack>
            <Stack mb={10}>
                <TableContainer>
                    <Table variant='unstyled'>
                        <Tbody>
                            {testData.type ?
                                <Tr>
                                    <Td>
                                        <Flex gap={2} alignItems={'center'}>
                                            <BiTestTube color={'#e1272c'} />
                                            <Heading as={'h3'} fontSize={'sm'}>TEST TYPE :</Heading>
                                        </Flex>
                                    </Td>
                                    <Td>{testData.type || ""}</Td>
                                </Tr>
                                : null}

                            {testData.configuration ?
                                <Tr>
                                    <Td>
                                        <Flex gap={2} alignItems={'center'}>
                                            <SettingsIcon color={'#e1272c'} />
                                            <Heading as={'h3'} fontSize={'sm'}>TEST CONFIGURATION :</Heading>
                                        </Flex>
                                    </Td>
                                    <Td>{testData.configuration || ""}</Td>
                                </Tr>
                                : null}

                            {testData.info ?
                                <Tr>
                                    <Td>
                                        <Flex gap={2} alignItems={'center'}>
                                            <InfoIcon color={'#e1272c'} />
                                            <Heading as={'h3'} fontSize={'sm'}>PRE-TEST INFORMATION :</Heading>
                                        </Flex>
                                    </Td>
                                    <Td>{testData.info || ""}</Td>
                                </Tr>
                                : null}

                            {testData.delivery ?
                                <Tr>
                                    <Td>
                                        <Flex gap={2} alignItems={'center'}>
                                            <TimeIcon color={'#e1272c'} />
                                            <Heading as={'h3'} fontSize={'sm'}>REPORT DELIVERY :</Heading>
                                        </Flex>
                                    </Td>
                                    <Td>{testData.delivery || ""}</Td>
                                </Tr>
                                : null}

                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack>
    )
}