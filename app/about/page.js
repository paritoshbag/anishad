'use client'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { chakra } from '@chakra-ui/react'
// export const metadata = {
//   title: 'About Us | Aanisa Diagnostics',
//   description: 'One stop diagnostics solutions',
// }
export default function About() {
  return (
    <Stack
      as={Container}
      maxW={'container.xl'}
      mt={5}
      mb={5}
    >
      <Stack mb={10}>
        <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} >About <chakra.span color={'#e1272c'}>Us</chakra.span></Heading>
        <Text>{`Established in 2021 as AANISA DIAGNOSTICS at Galsi (Purba Bardhaman), we started as one of the first diagnostic centers at Galsi to provide all pathology and radiology services under one roof. This convenience, along with our unwavering commitment to accuracy and hassle free service, resulted in steady growth and popularity. Within 2 years we could confidently open a second branch at Budbud (Purba Bardhaman).`}.
        </Text>
      </Stack>
      <Stack
        flexDir={['column', 'column', 'row']}
      >
        <Stack
          spacing={4}
          width={['100%', '100%', '50%']}
        // flexDir={['column','row','row']}
        >
          <Heading as={'h2'} fontSize={'24px'} >THE BEST OF <chakra.span color={'#e1272c'}>TECHNOLOGIES </chakra.span>AND KNOW-HOW</Heading>
          <Text>{`We are Committed to deliver world-class quality. Radiologists, Biochemists, Pathologists, Microbiologists as well as skilled technicians. Diagnostic services range from Radiology to Pathology, Histopathology, Molecular Biology, Cytogenetics, Cardiology, Gastroenterology and Neurology tests.`}
          </Text>

          <Heading as={'h2'} fontSize={'24px'} >OUR <chakra.span color={'#e1272c'}>MISSION</chakra.span></Heading>
          <Text>{`To provide a productive life through Quality, Innovation and Excellence. To build a network of laboratory, imaging and delivery infrastructure that will constantly advance industry benchmarks.`}
          </Text>
          <Heading as={'h2'} fontSize={'24px'} >OUR <chakra.span color={'#e1272c'}>VISION</chakra.span></Heading>
          <Text>{`To be recognized as the best and most reliable diagnostic service provider in the country.`}
          </Text>
        </Stack>
        <Stack
          width={['100%', '100%', '50%']}
        // flexDir={['column','row','row']}
        >
          <Image
            rounded={'2xl'}
            shadow={'2xl'}
            src='/img/about.jpg' alt='Dan Abramov' />
        </Stack>
      </Stack>
    </Stack>
  )
}
// export async function generateMetadata({ params }) {
//   return {
//     title: 'About Us | Aanisa Diagnostics',
//     description: 'One stop diagnostics solutions',
//   }
// }
// export const metadata = {
//   title: 'About Us | Aanisa Diagnostics',
//   description: 'One stop diagnostics solutions',
// }