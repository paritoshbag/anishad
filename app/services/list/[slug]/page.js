"use client"
import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { chakra } from '@chakra-ui/react'

export default function ServiceListPage({ params }) {
    const [servicedata, setServiceData] = useState()
    const FetchService = async (testId) => {
        try {
            const response = await axios.post('/api/admin/addservice', {
                method: 'FIND', // Include a method field to indicate it's a delete operation
                id: testId,
            });
            if (response.status === 200) {
                setServiceData(response.data)
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
    console.log(servicedata)
    if (!servicedata) {
        return
    }
    return (
        <Stack
            as={Container}
            maxW={'container.xl'}
            mt={5}
            mb={5}
        >
            <Stack flexDir={['column', 'column', 'row', 'row', 'row']}>

                <Stack mb={10} w={['100%', '100%', '70%', '70%', '70%']}>
                    <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} >Diagnostic Service - <chakra.span color={'#e1272c'}>{servicedata.name || ""}</chakra.span></Heading>
                    <Text
                        dangerouslySetInnerHTML={{
                            __html: servicedata.description || ""
                        }}
                    />
                    <Stack mb={10}>
                        <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} ><chakra.span color={'#e1272c'}>OUR FACILITY:</chakra.span></Heading>
                        <Text dangerouslySetInnerHTML={{
                            __html: servicedata.facility || "",
                        }} />
                    </Stack>
                </Stack>
                {/* <Image
                 w={['100%','100%','20%','20%','20%']}
                    rounded={'2xl'}
                    shadow={'2xl'}
                    src={servicedata.image} alt='Dan Abramov'
                /> */}
                <Stack w={['100%', '100%', '30%', '30%', '30%']}>
                    {servicedata.image ?
                    <Image
                        
                        rounded={'2xl'}
                        shadow={'2xl'}
                        src={servicedata.image}
                        alt={servicedata.name}
                    />
                    :
                    <Image
                        // w={['100%', '100%', '20%', '20%', '20%']}
                        rounded={'2xl'}
                        shadow={'2xl'}
                        src={'/dummy.png'}
                        alt={servicedata.name}
                    />
                }
                </Stack>
                
            </Stack>

        </Stack>
    )
}