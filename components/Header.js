'use client'
import { useDataFetching } from '@/hooks'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MyModal from './MyModal'

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicemenu, setServiceMenu] = useState('none');
    const [imaging, setImaging] = useState([])
    const [cardiology, setCardiology] = useState([])
    const [neurology, setNeurology] = useState([])
    const [clinicalpathology, setClinicalpathology] = useState([])
    const [pathology, setPathology] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: session, status } = useSession({
        required: false
    });
    const menu = [
        {
            menuItem: 'Home',
            href: '/'
        },
        {
            menuItem: 'About Us',
            href: '/about'
        },
        {
            menuItem: 'Services',
            href: '/services',
            submenu: true
        },
        {
            menuItem: 'Find a Test',
            href: '/find-a-test'
        },
        {
            menuItem: 'Download',
            href: '/report-download'
        },
        {
            menuItem: 'Our Centers',
            href: '/our-centers'
        },
        {
            menuItem: 'Contact Us',
            href: '/contact-us'
        },
    ]
    const TogleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }
    }
    const activeServiceMenu = (item) => {
        if (item) {
            setServiceMenu('flex')
        } else {
            setServiceMenu('none')
        }
    }
    const deactiveServiceMenu = (item) => {
        if (item) {
            setServiceMenu('flex')
        } else {
            setServiceMenu('none')
        }
    }
    const { data, loading } = useDataFetching(
        '/api/admin/addservice'
    );
    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (!loading) {
            let filteredImaging = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === 'imaging') {
                    filteredImaging = [...filteredImaging, data[i]];
                }
            }
            setImaging(filteredImaging)
            let filteredCardiology = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === 'cardiology') {
                    filteredCardiology = [...filteredCardiology, data[i]];
                }
            }
            setCardiology(filteredCardiology)
            let filteredNeurology = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === 'neurology') {
                    filteredNeurology = [...filteredNeurology, data[i]];
                }
            }
            setNeurology(filteredNeurology)
            let filteredClinicalpathology = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === 'clinicalpathology') {
                    filteredClinicalpathology = [...filteredClinicalpathology, data[i]];
                }
            }
            setClinicalpathology(filteredClinicalpathology)
            let filteredPathology = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].category === 'pathology') {
                    filteredPathology = [...filteredPathology, data[i]];
                }
            }
            setPathology(filteredPathology)
            const timeoutId = setTimeout(() => {
                setIsModalOpen(true);
            }, 30000); // 30 seconds in milliseconds

            return () => clearTimeout(timeoutId);
        }
    }, [loading])

    return (
        <>
        <Flex flexDir={'column'}>
            <Flex
                align={'center'}
                bg={'black'}
                color={'white'}
                alignItems={'center'}

            >
                <Stack
                    as={Container}
                    justify={'space-between'}
                    flexDir={'row'}
                    maxW={'container.xl'}
                    paddingTop={2}
                    paddingBottom={2}
                >
                    <Flex gap={2}>
                        <Link href={'http://180.188.231.194'} target='_blank'>
                        <Text>ADMIN LOGIN</Text>
                        </Link>
                        <Text> | </Text>
                        <Text>8945553202</Text>

                    </Flex>
                    <Flex gap={2}>
                        {session ?
                            <Flex gap={2}>

                                <Link href={'/dashboard'}>
                                    <Text>Dashboard</Text>
                                </Link>
                                <Text>|</Text>
                                <Text cursor={'pointer'} onClick={signOut}>Logout</Text>
                            </Flex>

                            :
                            <Link href={'/api/auth/signin'}>
                                <Text>Login</Text>
                            </Link>

                        }

                    </Flex>
                </Stack>
            </Flex>
            <Stack
                as={Container}
                maxW={'container.xl'}
                flexDir={'row'}
                justify={'space-between'}
                pt={4}
                pb={4}
                align={'center'}
            >
                <Link href={'/'}>
                    <Image src='/logo.png' alt='Dan Abramov' height={['40px','40px','50px','60px']} />
                </Link>
                <Image src='/iso2015-1024x395.png' alt='Dan Abramov' height={['30px','40px','50px','60px']} />

            </Stack>
            <Stack
                display={['none', 'none', 'flex', 'flex']}
            >
                <Stack
                    bg={'#eb2026'}
                    justify={'center'}
                    // alignItems={'center'}
                    gap={0}
                    color={'white'}
                    fontWeight={'bold'}
                    shadow={'lg'}
                    flexDir={'row'}
                    textTransform={'uppercase'}>
                    {menu.map((item) => {
                        return (
                            <Stack key={item.menuItem}>
                                <Link
                                    href={item.href}
                                    onMouseEnter={() =>
                                        activeServiceMenu(item.submenu)
                                    }
                                >
                                    <Box
                                        p={3}
                                        _hover={{
                                            bg: '#b70409'
                                        }}
                                        bg={pathname == item.href ? '#b70409' : ''}
                                    >
                                        {item.menuItem}
                                    </Box>
                                </Link>
                            </Stack>
                        )
                    })}
                </Stack>
                {/* on hover submenu */}
                <Stack
                    bg={'#fff'}
                    shadow={'lg'}
                    // height={'500px'}
                    as={Container}
                    maxW={'container.xl'}
                    pos={'absolute'}
                    left={0}
                    right={0}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    top={'180px'}
                    zIndex={'popover'}
                    display={servicemenu}
                    flexDir={'row'}
                    padding={4}
                    justify={'space-between'}
                    onMouseLeave={() =>
                        activeServiceMenu()
                    }
                >
                    {imaging.length > 0 ?
                        <Stack zIndex={'popover'}>
                            <Text color={'#eb2026'} fontSize={'20px'} lineHeight={'25px'}>Imaging</Text>
                            {imaging.map((item) => {
                                return (
                                    <Link href={`/services/list/${item.id}`} key={item.id}>
                                        <Text >{item.name}</Text>
                                    </Link>
                                )
                            })}

                        </Stack>
                        :
                        null
                    }
                    {cardiology.length > 0 ?
                        <Stack zIndex={'popover'}>
                            <Text color={'#eb2026'} fontSize={'20px'} lineHeight={'25px'}>Cardiology</Text>
                            {cardiology.map((item) => {
                                return (
                                    <Link href={`/services/list/${item.id}`} key={item.id}>
                                        <Text >{item.name}</Text>
                                    </Link>
                                )
                            })}
                        </Stack>
                        :
                        null
                    }
                    {neurology.length > 0 ?
                        <Stack zIndex={'popover'}>
                            <Text color={'#eb2026'} fontSize={'20px'} lineHeight={'25px'}>Neurology</Text>
                            {neurology.map((item) => {
                                return (
                                    <Link href={`/services/list/${item.id}`} key={item.id}>
                                        <Text >{item.name}</Text>
                                    </Link>
                                )
                            })}
                        </Stack>
                        :
                        null
                    }
                    {clinicalpathology.length > 0 ?
                        <Stack zIndex={'popover'}>
                            <Text color={'#eb2026'} fontSize={'20px'} lineHeight={'25px'}>Clinical Pathology</Text>
                            {clinicalpathology.map((item) => {
                                return (
                                    <Link href={`/services/list/${item.id}`} key={item.id}>
                                        <Text >{item.name}</Text>
                                    </Link>
                                )
                            })}
                        </Stack>
                        :
                        null
                    }
                    {pathology.length > 0 ?
                        <Stack zIndex={'popover'}>
                            <Text color={'#eb2026'} fontSize={'20px'} lineHeight={'25px'}>Pathology</Text>
                            {pathology.map((item) => {
                                return (
                                    <Link href={`/services/list/${item.id}`} key={item.id}>
                                        <Text >{item.name}</Text>
                                    </Link>
                                )
                            })}
                        </Stack>
                        :
                        null
                    }

                </Stack>
                {/* on hover submenu */}
            </Stack>
            <Stack
                display={['flex', 'flex', 'none', 'none']}
                bg={'#eb2026'}
                // justify={'center'}
                // alignItems={'center'}
                gap={1}
                color={'white'}
                fontWeight={'bold'}
                boxShadow={'dark-lg'}
                textTransform={'uppercase'}
                p={2}
            >
                <Stack align={'center'} cursor={'pointer'}>
                    <HamburgerIcon w={6} h={6} onClick={() => TogleMenu()} />
                </Stack>
                {menuOpen ?
                    <Stack>
                        {menu.map((item) => {
                            return (
                                <Link href={item.href} key={item.menuItem} >
                                    <Box
                                        textAlign={'center'}
                                        onClick={() => TogleMenu()}
                                        p={1}
                                        _hover={{
                                            bg: '#b70409'
                                        }}
                                    >
                                        {item.menuItem}
                                    </Box>
                                </Link>
                            )
                        })}
                    </Stack>
                    : null}

            </Stack>
        </Flex>
        <MyModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )

}
