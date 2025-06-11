import Sidebar from '@/components/Sidebar'
import AddServiceForm from '@/components/ui/AddServiceForm'
import { Container, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function AddService() {
  return (
    <Stack
      as={Container}
      maxW={'container.xl'}
    >
      <Sidebar>
        <AddServiceForm formType={'POST'} data={[]} />
      </Sidebar>
    </Stack>
  )
}