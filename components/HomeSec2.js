import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function HomeSec2({ title, image, rborder, link }) {
    return (
        <Link href={link}>
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                borderRightWidth={['0px', '0px', '0px', rborder]}
                // padding={4}
                borderRightColor={'#eb2126'}


            >

                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    minH={'180px'}
                    width={'180px'}
                    justifyItems={'center'}>
                    <Stack
                        bg={'white'}
                        rounded={'full'}
                        width={'100px'}
                        height={'100px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        borderWidth={3}
                        borderColor={'#eb2026'}
                        p={4}
                    >
                        <Image
                            rounded={'full'}
                            // boxSize='80px'
                            _hover={{
                                boxSize: '70px',
                                transition: '1s'
                            }}
                            src={image}
                            alt={title}
                            borderWidth={2}
                            borderColor={'black'}
                        />
                    </Stack>

                    <Heading p={4} as={'h3'} fontSize={'md'} textTransform={'uppercase'} textAlign={'center'}>{title}</Heading>
                </Stack>
            </Flex>
        </Link>
    )
}
