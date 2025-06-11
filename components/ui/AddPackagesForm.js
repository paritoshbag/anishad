"use client"
import { Button, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddPackagesForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

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
        <Input placeholder='Package Name' size='md'  {...register("packagename", { required: true })} />
        {errors.packagename && <Text color={'red'}>This field is required</Text>}
        <Input placeholder='Package Price' size='md'  {...register("packageprice", { required: true })} />
        {errors.packageprice && <Text color={'red'}>This field is required</Text>}
        <Input placeholder='Package Parameters' size='md'  {...register("packageParameters", { required: true })} />
        {errors.packageParameters && <Text color={'red'}>This field is required</Text>}
        <Textarea placeholder='Package Includes' size='md'   {...register("PackageIncludes", { required: true })} />
        {errors.PackageIncludes && <Text color={'red'}>This field is required</Text>}
        
        <Stack flexDir={'row'} justifyContent={'right'}>
          <Button type='' colorScheme='blackAlpha' textTransform={'uppercase'}>List</Button>
          <Button type='submit' colorScheme='red' textTransform={'uppercase'}>Submit</Button>
        </Stack>
      </Stack>
    </form>
  )
}
