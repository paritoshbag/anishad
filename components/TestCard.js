import { InfoIcon, PhoneIcon, SettingsIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Text, chakra } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TestCard({ testname, info, price, linkid, testtype }) {
    const router = useRouter();
    return (
        <Flex
            borderWidth={2}
            rounded={'2xl'}
            flexDir={'column'}
            p={4}
            borderColor={'#e1272c'}
            gap={4}
            shadow={'xl'}
        >
            <Heading as={'h3'} fontSize={'sm'} color={'#e1272c'} mb={4}>{testname}</Heading>
            <Flex gap={2} alignItems={'center'}>
                <SettingsIcon color={'#e1272c'} />
                <Heading as={'h3'} fontSize={'sm'}>{testtype}</Heading>
            </Flex>
            <Flex gap={2} alignItems={'flex-start'} minH={'100px'}>
                <InfoIcon color={'#e1272c'} />
                {/* <Text fontSize={'sm'} noOfLines={2}>{info}</Text> */}
                <Text
                    noOfLines={2}
                    mt={'-5px'}
                    dangerouslySetInnerHTML={{
                        __html: info || "",
                    }} />
            </Flex>
            <Heading as={'h2'} fontSize={'2xl'} fontWeight={'black'} color={'#e1272c'}>₹ {price}</Heading>
            <Flex justify={'space-between'} gap={2}>
                <Button width={'50%'} textTransform={'uppercase'} onClick={()=>router.push('/contact-us')} colorScheme='red'>Book Now</Button>
                <Button width={'50%'} textTransform={'uppercase'} onClick={() => router.push(`/find-a-test/list/${linkid}`)}>Know More</Button>
            </Flex>
        </Flex>
    )
}
