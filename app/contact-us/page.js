'use client'
import { AspectRatio, Box, Button, Container, Heading, Image, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { chakra } from '@chakra-ui/react'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactUs() {
    return (
        <Stack>
            <Stack
                as={Container}
                maxW={'container.xl'}
                mt={5}
                mb={5}
                flexDir={['column', 'column', 'row']}
                justify={['space-between']}
                alignItems={['left', 'left', 'center']}
            >
                <Stack mb={10}>
                    <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} pb={5}>Contact <chakra.span color={'#e1272c'}>Us</chakra.span></Heading>
                    <Heading as={'h3'} fontSize={'20px'} textTransform={'uppercase'} color={'#e1272c'}>{`Head Office`}
                    </Heading>
                    <Stack gap={0}>
                        <Text>Aanisa Diagnostics</Text>
                        <Text>Galsi Bazar NH19</Text>
                        <Text>PO PS - Galsi</Text>
                        <Text>Purba Bardhaman</Text>
                        <Text>Pin - 713406</Text>
                    </Stack>

                </Stack>
                <ContactForm/>
            </Stack>
            <AspectRatio ratio={16 / 4}>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.372128065894!2d87.69207027532335!3d23.33852897895369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f82dc1107896dd%3A0xde0b90c097e7260!2sAANISA%20DIAGNOSTICS!5e0!3m2!1sen!2sin!4v1698685905321!5m2!1sen!2sin'
                />
            </AspectRatio>
        </Stack>
    )
}
