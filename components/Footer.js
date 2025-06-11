import { Container, Flex, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi'

export default function Footer() {
    return (
        <Flex bg={'#282727'} minH={20}>
            <Stack
                as={Container}
                maxW={'container.xl'}
                flexDir={['column','column','column','row']}
                justify={'space-between'}
                pt={10}
                pb={10}
            >
                <Flex
                    // w={['100%', '30%']} 
                    flexDir={'column'}>
                    <Text color={'white'} width={['full','250px','250px','250px']}>{`Copyright @ 2023 Aanisa Diagnostics.`}
                    </Text>
                    <Stack flexDir={'row'}>
                        <BiLogoFacebookCircle size={30} color='#3b589c' />
                        <BiLogoYoutube size={30} color='#cf3427' />
                        <BiLogoLinkedin size={30} color='#1886b0' />
                        <BiLogoInstagramAlt size={30} color='#7c5d4e' />

                    </Stack>
                </Flex>
                <Flex
                    justifyContent={'space-between'}
                    flexDir={['column','column','column','row']}
                    gap={10}
                    color={'white'}
                    // justify={'right'}

                >
                    <Stack>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/find-a-test'}>Find a Test</Link>
                        <Link href={'/'}>Find a Doctor</Link>
                        <Link href={'/contact-us'}>Feedback</Link>
                    </Stack>
                    <Stack>
                        <Link href={'/'}>Corporate Partners</Link>
                        <Link href={'/'}>Home Collection </Link>
                        <Link href={'/'}>Customer Care</Link>
                        <Link href={'/'}>{`FAQ's`}</Link>
                    </Stack>
                    <Stack>
                        <Link href={'/'}>Media & Events</Link>
                        <Link href={'/'}>Latest News</Link>
                        <Link href={'/'}>Career</Link>
                        <Link href={'/'}>Video Tour</Link>
                    </Stack>
                    <Stack>
                        <Link href={'/contact-us'}>Contact Us</Link>
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Terms and Conditions</Link>
                    </Stack>
                    </Flex>
            </Stack>
        </Flex>
    )
}
