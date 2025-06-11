"use client"
import { Button, Checkbox, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextEditor from './TextEditor';

export default function TestInputForm({ data, formType }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  // const onSubmit = (data) => console.log(data)

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/admin/addtest", data);
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
        title: "Test added",
        description: "Test added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      if (formType == "UPDATE") {
        router.push('/dashboard/add-test/list')
      }
      if (formType == "POST") {
        reset();
      }
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

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}

    //   <input type="submit" />
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Input placeholder='Test Title' size='md' defaultValue={data.title || ''}  {...register("testTitle", { required: true })} />
        {errors.testTitle && <Text>This field is required</Text>}
        {/* <Input placeholder='Test Name' size='md' defaultValue={data.name || ''}   {...register("testName",)} />
        {errors.testName && <Text>This field is required</Text>} */}
        <Input placeholder='Test Type' size='md' defaultValue={data.type || ''}   {...register("testType",)} />
        {errors.testType && <Text>This field is required</Text>}
        <Input placeholder='Test Configuration' size='md' defaultValue={data.configuration || ''}    {...register("testConfiguration",)} />
        {errors.testConfiguration && <Text>This field is required</Text>}
        <Input placeholder='PRE-TEST INFORMATION' size='md' defaultValue={data.info || ''}   {...register("preTestInfo",)} />
        {errors.preTestInfo && <Text>This field is required</Text>}
        <Input placeholder='REPORT DELIVERY' size='md' defaultValue={data.delivery || ''}     {...register("reportDelivery",)} />
        {errors.reportDelivery && <Text>This field is required</Text>}
        <Input placeholder='Price' defaultValue={data.price || ''}    {...register("testPrice",)} inputMode='numeric' type='number' />
        {errors.testPrice && <Text>This field is required</Text>}
        {/* <Textarea placeholder='Test Description'   defaultValue={data.description || ''}    {...register("testDescription", )} />
        {errors.testDescription && <Text>This field is required</Text>} */}
        <TextEditor
          title={'Test Description'}
          value={data.description || ''}
          onChange={(val) => {
            setValue("testDescription", val);
          }}
        />
        <Input type='hidden' value={formType} {...register("method")} />
        {formType == "UPDATE" ? <Input type='hidden' value={data.id} {...register("id")} /> : null}
        <Checkbox {...register("featuretest")} defaultChecked={data.featured || false} >Featured Test</Checkbox>
        <Checkbox {...register("testSlide")} defaultChecked={data.slide || false} >Slide Test</Checkbox>
        <Stack flexDir={'row'} justifyContent={'right'}>
          <Button type='button' onClick={() => router.push('/dashboard/add-test/list')} colorScheme='blackAlpha' textTransform={'uppercase'}>List</Button>
          <Button type='submit' colorScheme='red' textTransform={'uppercase'}>Submit</Button>
        </Stack>
      </Stack>
    </form>
  )
}
