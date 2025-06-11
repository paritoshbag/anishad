'use client'
import PopularTestsSlider from '@/components/PopularTestsSlider'
import TestCard from '@/components/TestCard'
import SearchInput from '@/components/ui/SearchInput'
import { useDataFetching } from '@/hooks'
import { CheckIcon, SearchIcon } from '@chakra-ui/icons'
import { Container, Heading, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Spinner, Stack, chakra } from '@chakra-ui/react'
import React from 'react'


export default function FindATest() {
    const { data, loading } = useDataFetching(
        '/api/admin/addtest'
    );
    if (loading) {
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

    } else {
        const testlist = data.filter(item => item.featured === true);
        const testlistslide = data.filter(item => item.slide === true);
        


        return (
            <>
                <Stack
                    as={Container}
                    maxW={'container.xl'}
                    mt={5}
                    mb={5}
                >
                    <Stack
                        flexDir={['column', 'column', 'row']}
                        justify={['space-between']}
                        alignItems={['left', 'left', 'center']}
                    >
                        <Stack>
                            <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'}>Find <chakra.span color={'#e1272c'}>a Test</chakra.span></Heading>
                        </Stack>
                    </Stack>
                    <Stack>

                        <Heading as={'h1'} textAlign={'center'} fontSize={'30px'}>Popular <chakra.span color={'#e1272c'}>Test</chakra.span></Heading>
                        <Stack display={['none', 'none', 'none', 'none', 'block']}>
                            <PopularTestsSlider sliderInfo={testlistslide} sliderCount={4} />
                        </Stack>
                        <Stack display={['none', 'none', 'none', 'block', 'none']}>
                            <PopularTestsSlider sliderInfo={testlistslide} sliderCount={4} />
                        </Stack>
                        <Stack display={['none', 'none', 'block', 'none', 'none']}>
                            <PopularTestsSlider sliderInfo={testlistslide} sliderCount={3} />
                        </Stack>
                        <Stack display={['none', 'block', 'none', 'none', 'none']}>
                            <PopularTestsSlider sliderInfo={testlistslide} sliderCount={2} />
                        </Stack>
                        <Stack display={['block', 'none', 'none', 'none', 'none']}>
                            <PopularTestsSlider sliderInfo={testlistslide} sliderCount={1} />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    justifyItems={'center'}
                    bg={'red'}
                    paddingTop={8}
                    pb={8}>
                    <Stack
                        as={Container}
                        maxW={'container.sm'}
                        gap={4}
                        alignItems={'center'}

                    >
                        <SearchInput/>
                    </Stack>
                </Stack>
                <Stack
                    as={Container}
                    maxW={'container.xl'}
                    mt={5}
                    mb={5}
                >
                    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
                        {testlist.map((item) => {
                            return <TestCard testtype={item.type} testname={item.title} info={item.description} price={item.price} key={item.id} linkid={item.id} />
                        })}

                    </SimpleGrid>
                </Stack>
            </>
        )
    }
}
