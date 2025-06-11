'use client'

import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { chakra } from '@chakra-ui/react'
export default function OurCenter() {
  return (
    <Stack
      as={Container}
      maxW={'container.xl'}
      mt={5}
      mb={5}
    >
      <Stack mb={10}>
        <Heading as={'h1'} textTransform={'uppercase'} fontSize={'30px'} >Our <chakra.span color={'#e1272c'}>Centers</chakra.span></Heading>
      </Stack>
      <Stack flexDir={['column','column','row','row']}>
        <Card maxW='full'>
          <CardBody>
            <Image
              src='/img/img2.jpeg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Head Office</Heading>
              <Text>
                {`Galsi Bazar NH19, PO/PS - Galsi, Purba Bardhaman, West Bengal, Pin - 713406`}
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='full'>
          <CardBody>
            <Image
              src='/img/img1.jpeg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Branch Office</Heading>
              <Text>
              {`Budbud Bazar, Mankar Road (Near NH19), PO/PS - Budbud, Purba Bardhaman, West Bengal, Pin - 713403`}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Stack>

    </Stack>
  )
}
