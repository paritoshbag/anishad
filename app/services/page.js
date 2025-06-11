"use client"
import { useDataFetching } from '@/hooks'
import { Container, Heading, Image, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

export default function Services() {
  const { data, loading } = useDataFetching(
    '/api/admin/addservice'
  );
  if (loading) {
    return (
      <Stack
        as={Container}
        maxW={'container.xl'}
        mt={5}
        mb={5}
      >
        <Stack mb={10}>
          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10}>
            <Skeleton
              rounded={'2xl'}
              shadow={'2xl'}>
              <Stack
                height={60}
              ></Stack>
            </Skeleton>
            <Skeleton
              rounded={'2xl'}
              shadow={'2xl'}>
              <Stack
                height={60}
              ></Stack>
            </Skeleton>
            <Skeleton
              rounded={'2xl'}
              shadow={'2xl'}>
              <Stack
                height={60}
              ></Stack>
            </Skeleton>
            <Skeleton
              rounded={'2xl'}
              shadow={'2xl'}>
              <Stack
                height={60}
              ></Stack>
            </Skeleton>
          </SimpleGrid>
        </Stack>
      </Stack>
    )
  } else {
    return (
      <Stack
        as={Container}
        maxW={'container.xl'}
        mt={5}
        mb={5}
      >
        <Stack mb={10}>
          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10}>
            {data.map((item) => {
              return (
                <Link href={`/services/list/${item.id}`} key={item.id}>
                  <Stack>
                    {item.image ?
                    <Image
                    rounded={'2xl'}
                    shadow={'2xl'}
                    src={item.image} 
                    alt={item.name}
                  />
                    :
                    <Image
                      rounded={'2xl'}
                      shadow={'2xl'}
                      src={'/dummy.png'} 
                      alt={item.name}
                    />
                  }
                    <Heading textAlign={'center'} textTransform={'uppercase'} fontSize={'lg'} as={'h2'}>{item.name}</Heading>
                  </Stack>
                </Link>
              )
            })}

          </SimpleGrid>
        </Stack>
      </Stack>
    )
  }
}
