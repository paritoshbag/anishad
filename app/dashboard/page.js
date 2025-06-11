"use client"
import Sidebar from '@/components/Sidebar'
import { authOptions } from '@/utils/authOptions'
import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect("/api/auth/signin")
//   }
//   return (
//     <Stack
//         as={Container}
//         maxW={'container.xl'}
//     >
//         <Sidebar>
//             <Text>dsfsdf</Text>
//         </Sidebar>
//     </Stack>
//   )
// }
export default function Dashboard() {
//  const {data: session, status} = useSession({
//   required:true
//  });
//  if(status === "loading") {
//   return <></>
//  }
  return (
    <Stack
        as={Container}
        maxW={'container.xl'}
    >
        <Sidebar>
            <Stack justify={'center'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
              <Heading>Admin Panel</Heading>
            </Stack>
        </Sidebar>
    </Stack>
  )
}
