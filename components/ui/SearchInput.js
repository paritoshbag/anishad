import { useDataFetching } from '@/hooks';
import { SearchIcon } from '@chakra-ui/icons'
import { Container, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function SearchInput() {
    const router = useRouter();
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { data, loading } = useDataFetching(
        '/api/admin/addtest'
    );
    const OnChangeText = () => {
        // if (!loading) {
        //     setFilterData(data);
        // }
        // console.log(filterData);
    }
    useEffect(() => {
        if (data) { // Check if data is defined
            const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
            // console.log(filtered);
        }
    }, [data, searchQuery]);

    return (
        <Stack
            // as={Container}
            // maxW={'container.md'}
        >
            <InputGroup>
                <Input
                    height={'50px'}
                    width={['xs','sm','md','lg','xl','2xl']}
                    placeholder='Search for Test'
                    bg={'white'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <InputRightElement height={'50px'} >
                    <SearchIcon color='red' />
                </InputRightElement>
            </InputGroup>
            {searchQuery ?
                <Stack
                    // as={Container}
                    width={['xs','sm','md','lg','xl','2xl']}

                    bg={'gray.100'}
                    position={'absolute'}
                    left={0}
                    right={0}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    marginTop={'50px'}
                    zIndex={99999999}
                    rounded={'md'}
                    shadow={'md'}
                    gap={0}
                >
                    {filteredData.map((item) => {
                        return (
                            <Stack
                                bg={'white'}
                                p={2}
                                gap={0}
                                _hover={{
                                    bg: 'gray.100',
                                    cursor: 'pointer'
                                }}
                                key={item.id}
                                onClick={() => router.push(`/find-a-test/list/${item.id}`)}
                            >
                                <Text>{item.title}</Text>
                            </Stack>
                        )
                    })}

                </Stack>
                : null}

        </Stack>
    )
}
