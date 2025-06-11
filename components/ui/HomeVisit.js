import { Button, FormControl, Heading, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function HomeVisit() {
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => console.log(data)
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/homevisit", data);
            if (!response.data) {
                toast({
                    title: "Woops!",
                    description: response.error,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false);
                return;
            }
            toast({
                title: "Request Subbmited",
                description: "Callback request subbmited successfully.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setLoading(false);
            reset();
        } catch (error) {
            // toast({
            //   title: "Woops!",
            //   description: error.response.message,
            //   status: "error",
            //   duration: 9000,
            //   isClosable: true,
            // });
            setLoading(false);
            console.log(error)
        }
    }
    return (
        <Stack
            w={['full', 'full', 'xl']}
            rounded={'2xl'}
            shadow={'lg'}
            border='1px'
            padding={2}
            borderColor='gray.100'
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Heading
                size={'md'}
                mt={4}
                fontWeight={'bold'}
                color={'#eb2026'}>BOOK A HOME VISIT NOW!
            </Heading>
            <Stack gap={4} w={'full'} m={6} pl={4} pr={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <Input placeholder='Full Name'  {...register("name", { required: true })} />
                        {errors.name && <Text color={'red'}>This field is required</Text>}
                    </FormControl>
                    <FormControl mt={2}>
                        <Input placeholder='Mobile No'  {...register("phone", { required: true })} />
                        {errors.phone && <Text color={'red'}>This field is required</Text>}
                    </FormControl>
                    <FormControl mt={2}>
                        <Input placeholder='Email ID'   {...register("email")} />
                        {errors.email && <Text color={'red'}>This field is required</Text>}
                    </FormControl>
                    <FormControl mt={2}>
                        <Input placeholder='Enter Test Name'  {...register("testname", { required: true })} />
                        {errors.testname && <Text color={'red'}>This field is required</Text>}
                    </FormControl>
                    <FormControl mt={2}>
                        <Button type='submit' colorScheme='red' w={'full'}>Get a Call Back</Button>
                    </FormControl>
                </form>
            </Stack>
        </Stack>
    )
}
