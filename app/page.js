'use client'
import Carousel from '@/components/Carousel'
import HomeSec2 from '@/components/HomeSec2'
import HomeSlider from '@/components/HomeSlider'
import ProductSlider from '@/components/ProductSlider'
import HomeVisit from '@/components/ui/HomeVisit'
import SearchInput from '@/components/ui/SearchInput'
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { chakra } from '@chakra-ui/react'
import { Button, Container, Flex, Grid, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home() {
  const router = useRouter();
  const sliderInfo = [
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 0',
      price: '5000.00',
      link: '/',
      id: 1
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 1',
      price: '5000.00',
      link: '/',
      id: 2
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 2',
      price: '5000.00',
      link: '/',
      id: 3
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 3',
      price: '5000.00',
      link: '/',
      id: 4
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 4',
      price: '5000.00',
      link: '/',
      id: 5
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 5',
      price: '5000.00',
      link: '/',
      id: 6
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 6',
      price: '5000.00',
      link: '/',
      id: 7
    },
    {
      title: '40 Plus Male',
      subtitle: 'Parameters - 7',
      price: '5000.00',
      link: '/',
      id: 8
    },
  ]
  return (
    <>
      <Stack
        as={Container}
        maxW={'container.xl'}
        flexDir={['column', 'column', 'row']}
        justify={'space-between'}
        pt={4}
        pb={4}
        mb={20}

      >
        <HomeSlider/>

        {/* <Carousel /> */}
        {/* <Stack
          w={['full', 'full', 'xl']}
          rounded={'2xl'}
          shadow={'lg'}
          border='1px'
          padding={2}
          borderColor='gray.100'
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Heading
            size={'md'}
            mt={4}
            fontWeight={'bold'}
            color={'#eb2026'}>BOOK A HOME VISIT NOW!
          </Heading>
          <Stack gap={4} w={'full'} m={6} pl={4} pr={4}>
            <Input placeholder='Full Name' />
            <Input placeholder='Mobile No' />
            <Input placeholder='Email ID' />
            <Input placeholder='Enter Test Name' />
            <Button colorScheme='red'>Get a Call Back</Button>
          </Stack>
        </Stack> */}
        <HomeVisit/>
      </Stack>
      <Stack
        // as={Container}
        // maxW={'container.xl'}
        // flexDir={['column','column','row']}
        justify={'space-between'}
        pt={4}
        pb={4}
        bg={'#F2EFEF'}
        minH={40}

      >
        <Stack
          as={Container}
          maxW={'container.lg'}
          // flexDir={['column', 'column', 'column', 'row']}
          // flexDir={'row'}
          justify={'center'}
          pt={4}
          pb={4}
          bg={'#F5F5F5'}
          minH={40}
          mt={-20}
          rounded={'2xl'}
          shadow={'xl'}
          alignItems={'center'}
        >
          <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing={1}>
            <HomeSec2 title={'Book a Home Collection'} link={'/contact-us'} rborder={'3px'} image={'/covid-test.png'} />
            <HomeSec2 title={'Book an Appointment'} link={'/contact-us'} rborder={'3px'} image={'/appointment.png'} />
            <HomeSec2 title={'Find a Test'} link={'/find-a-test'} rborder={'3px'} image={'/software-testing.png'} />
            <HomeSec2 title={'Download Report'} link={'/report-download'} rborder={'3px'} image={'/attachment.png'} />
            <HomeSec2 title={'Find Your Nearest Center'} link={'/our-centers'} rborder={'0px'} image={'/microscope.png'} />
          </SimpleGrid>
        </Stack>
        <Flex
          alignItems={'center'}
          alignContent={'center'}
          flexDir={'row'}
          justifyContent={'center'}
          marginTop={20}
          as={Container}
          maxW={'container.sm'}
        >
          <Heading mb={6} textTransform={'uppercase'} as={'h3'} fontSize={'4xl'} fontWeight={'black'} >Find a<chakra.span color={'#e1272c'}> Test</chakra.span></Heading>
        </Flex>
        <Stack
          as={Container}
          maxW={'container.sm'}
          pb={'80px'}
          gap={4}

        >
          <Stack
            alignItems={'center'}
            justifyContent={'center'}>
            <SearchInput/>
          </Stack>
          <Button onClick={()=>router.push('/contact-us')} colorScheme='red' fontSize={['14px', '', '']} p={6} rounded={false}>NEED HELP? Request a Call Back from our Experts</Button>
        </Stack>
      </Stack>
      <Stack>
        <Flex
          alignContent={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          pt={20}
        >
          {/* <Heading as={'h3'} fontSize={'4xl'} fontWeight={'black'} textAlign={'center'} >PREVENTIVE<chakra.span color={'#e1272c'}> HEALTH PACKAGES </chakra.span></Heading> */}

        </Flex>
        {/* <Stack
          alignItems={'center'}
          alignContent={'center'}
          // flexDir={['column','column','row']}
          justifyContent={'center'}
          // pt={20}
          pb={20}
          as={Container}
          maxW={'container.xl'}
          display={['block', 'none']}
        >
          <ProductSlider sliderInfo={sliderInfo} slidercount={1} />
        </Stack>
        <Stack
          alignItems={'center'}
          alignContent={'center'}
          // flexDir={['column','column','row']}
          justifyContent={'center'}
          // pt={20}
          pb={20}
          as={Container}
          maxW={'container.xl'}
          display={['none', 'block']}
        >
          <ProductSlider sliderInfo={sliderInfo} slidercount={3} />
        </Stack> */}
        <Stack
          as={Container}
          maxW={'container.xl'}
          // flexDir={['column', 'column', 'row']}
          pb={20}
        >
          <Flex
          // flexDir={'row'}
          // minW={'2xl'}
          >
            <Heading as={'h3'} fontSize={'29px'} fontWeight={'black'} >AANISA <chakra.span color={'#e1272c'}>DIAGNOSTICS</chakra.span></Heading>
            {/* <Heading as={'h3'} fontSize={['12px','18px','18px','29px']} fontWeight={'black'} color={'#e1272c'}>30 YEAR OLD</Heading>
            <Heading as={'h3'} fontSize={['12px','18px','18px','29px']} fontWeight={'black'}>LEGACY CONTINUES</Heading>
            <chakra.h1 fontSize='lg'> Heading </chakra.h1> */}

          </Flex>
          <Stack
          // minW={'2xl'}
          >
            <Text textAlign={'justify'}>
              {`Established in 2021 as AANISA DIAGNOSTICS at Galsi (Purba Bardhaman), 
              we started as one of the first diagnostic centers at Galsi to provide all 
              pathology and radiology services under one roof. This convenience, along 
              with our unwavering commitment to accuracy and hassle free service, resulted
               in steady growth and popularity. Within 2 years we could confidently open a 
               second branch at Budbud (Purba Bardhaman).`}
            </Text>
          </Stack>
          <Stack>
            <Button colorScheme='red' float={'left'} width={60} onClick={()=>router.push('/about')}>Read More</Button>
          </Stack>
        </Stack>
        <Stack
          bg={'#f0f0f0'}
          pt={20}
          pb={20}
        >
          <Stack
            as={Container}
            maxW={'container.xl'}
            alignContent={'center'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Heading as={'h3'} fontSize={'29px'} fontWeight={'black'} >GET A<chakra.span color={'#e1272c'}> FRANCHISEE </chakra.span></Heading>
          </Stack>
          <Stack
            flexDir={['column', 'column', 'row']}
            as={Container}
            maxW={'container.xl'}
            alignContent={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={4}
            mt={8}

          >
            <Stack
              p={4}
              borderWidth={2}
              borderColor={'#e1272c'}
              minH={'150px'}
              alignContent={'center'}
              alignItems={'center'}
              justifyContent={'center'}
              rounded={'2xl'}
              shadow={['xl', 'sm', 'xl']}
              textAlign={'center'}
              width={['100%', '100%', '33.333%']}
            >
              <Heading as={'h3'} textTransform={'uppercase'} fontSize={'xl'}>In 1 Year</Heading>
              <Text>Breakeven in the first year of operation</Text>
            </Stack>
            <Stack
              p={4}
              borderWidth={2}
              borderColor={'#e1272c'}
              minH={'150px'}
              alignContent={'center'}
              alignItems={'center'}
              justifyContent={'center'}
              rounded={'2xl'}
              shadow={['xl', 'sm', 'xl']}
              textAlign={'center'}
              width={['100%', '100%', '33.333%']}
            >
              <Heading as={'h3'} textTransform={'uppercase'} fontSize={'xl'}>In 2 Years</Heading>
              <Text>Initial investment on capital expenditure will be recovered within the first two years of operation</Text>
            </Stack>
            <Stack
              p={4}
              borderWidth={2}
              borderColor={'#e1272c'}
              minH={'150px'}
              alignContent={'center'}
              alignItems={'center'}
              justifyContent={'center'}
              rounded={'2xl'}
              shadow={['xl', 'sm', 'xl']}
              textAlign={'center'}
              width={['100%', '100%', '33.333%']}
            >
              <Heading as={'h3'} textTransform={'uppercase'} fontSize={'xl'}>In 3 Years</Heading>
              <Text>An annual return of 66% on your investment in a horizon of 5 years</Text>
            </Stack>

          </Stack>
          <Stack alignItems={'center'} alignContent={'center'} mt={10}>
            <Button width={'xs'} colorScheme='red' onClick={()=>router.push('/contact-us')}>Learn More</Button>
          </Stack>
        </Stack>

      </Stack>

    </>
  )
}
