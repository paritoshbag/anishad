import Sidebar from '@/components/Sidebar'
import { Container, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function HomeCollection() {
  return (
    <Stack
        as={Container}
        maxW={'container.xl'}
    >
        <Sidebar>
            <Text>dsfsdf</Text>
        </Sidebar>
    </Stack>
  )
}