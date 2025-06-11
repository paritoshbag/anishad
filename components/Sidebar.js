'use client'
import { Flex, Stack, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

export default function Sidebar({ children }) {
    const pathname = usePathname()
    const { data: session, status } = useSession({
        required: true
    });
    if (status === "loading") {
        return <></>
    }
    const menuItem = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            id: 0
        },
        {
            title: 'Add Test',
            href: '/dashboard/add-test',
            id: 1
        },
        {
            title: 'Add Service',
            href: '/dashboard/add-service',
            id: 2
        },
        {
            title: 'Add Slider',
            href: '/dashboard/add-slider',
            id: 3
        },
        {
            title: 'Add Report',
            href: '/dashboard/add-report',
            id: 4
        },
        // {
        //     title: 'Add Packages',
        //     href: '/dashboard/add-packages',
        //     id: 3
        // },
        // {
        //     title: 'Home Collection',
        //     href: '/dashboard/home-collection',
        //     id: 4
        // },
        // {
        //     title: 'Contact Us',
        //     href: '/dashboard/contact-us',
        //     id: 5
        // },

    ]
    return (
        <Flex mb={10}>
            <Stack
                borderWidth={2}
                width={'300px'}
                rounded={'md'}
                borderColor={'#eb2026'}
                height={'450px'}
                gap={0}
                shadow={'2xl'}
            >
                {menuItem.map((item) => {
                    return (
                        <Link href={item.href} key={item.id}>
                            <Flex
                                p={2}
                                fontSize={'md'}
                                textTransform={'uppercase'}
                                fontWeight={'bold'}
                                bg={pathname == item.href ? '#eb2026' : ""}
                                color={pathname == item.href ? '#fff' : "#eb2026"}
                                _hover={{
                                    bg: '#eb2026',
                                    color: '#fff'
                                }}
                            >
                                <Text>{item.title}</Text>
                            </Flex>
                        </Link>
                    )
                })}


            </Stack>
            <Stack
                borderWidth={2}
                width={'full'}
                ml={2}
                rounded={'lg'}
                p={2}
                borderColor={'#eb2026'}
                shadow={'2xl'}
            >

                {children}
            </Stack>
        </Flex>
    )
}
