import Sidebar from '@/components/Sidebar'
import TestInputForm from '@/components/ui/TestInputForm'
import { Container, Stack, Text } from '@chakra-ui/layout'
import { InputGroup } from '@chakra-ui/react'
import React from 'react'

export default function AddTest() {
  return (
    <Stack
        as={Container}
        maxW={'container.xl'}
    >
        <Sidebar>
            <Stack>
              <TestInputForm formType={'POST'} data={[]}/>
            </Stack>
        </Sidebar>
    </Stack>
  )
}
