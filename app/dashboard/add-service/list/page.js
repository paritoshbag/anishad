"use client"
import React, { useMemo, useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Stack, Text, Input, Button } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import { useDataFetching } from '@/hooks';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ListTest() {
    const { data, loading, mutate } = useDataFetching('/api/admin/addservice');
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (data) { // Check if data is defined
            const filtered = data.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [data, searchQuery]);
    const updateFetch = () => {
        mutate('/api/admin/addservice',true); 
      }
    const DeletTest = async (testId) => {
        try {
            const response = await axios.post('/api/admin/addservice', {
                method: 'DELETE', // Include a method field to indicate it's a delete operation
                id: testId,
            });
            if (response.status === 200) {
                // The test has been successfully deleted
                // updateFetch();
                mutate();
              } else {
                const data = response.data;
                console.error('Error deleting test:', data.message);
              }

        } catch (error) {
            console.log('Error deleting test:', error)
        }
    }

    const columns = useMemo(
        () => [
            {
                name: 'Service Name',
                selector: row => row.name,
                sortable: true,
            },
            {
                name: 'Service Category',
                selector: row => row.category,
                sortable: true,
            },
            {
                name: 'Actions',
                cell: (row) => (
                    <Stack flexDir={'row'} gap={2}>
                        <Button
                            variant="outline"
                            colorScheme='green'
                            size="sm"
                            onClick={() => {
                                // Handle action for the selected row's name
                                // console.log('Action for Name:', row.name);
                                // EditTest(row.id)
                                router.push(`/dashboard/add-service/list/edit/${row.id}`)
                            }}
                            // onClick={() => router.push('/dashboard/add-test/list/edit/'`${row.id}`)}                        
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outline"
                            colorScheme='red'
                            size="sm"
                            onClick={() => {
                                // Handle action for the selected row's title
                                // console.log('Action for Title:', row.title);
                                
                                DeletTest(row.id);
                            }}
                            
                        >
                            Delete
                        </Button>
                    </Stack>
                ),
            },
        ],
        []
    );

    return (
        <Stack as={Container} maxW={'container.xl'}>
            <Sidebar>
                <Stack>
                    <Stack flexDir={'row'}>
                        <Input
                            placeholder="Search by Title"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button colorScheme='green' onClick={() => router.push('/dashboard/add-service')}>New</Button>
                    </Stack>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <DataTable
                            columns={columns}
                            data={filteredData || []} // Provide an empty array as a fallback
                            pagination
                            highlightOnHover
                        />
                    )}
                </Stack>
            </Sidebar>
        </Stack>
    );
}
