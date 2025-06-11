import Sidebar from '@/components/Sidebar'
import AddPackagesForm from '@/components/ui/AddPackagesForm'
import { Container, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function AddPackages() {
  return (
    <Stack
        as={Container}
        maxW={'container.xl'}
    >
        <Sidebar>
            <AddPackagesForm/>
        </Sidebar>
    </Stack>
  )
}