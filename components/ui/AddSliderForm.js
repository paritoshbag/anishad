//AddSliderForm.js
"use client"
import { Button, Checkbox, Input, Select, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload';

export default function AddsliderForm({data, formType}) {
  const [loading, setLoading] = useState(false);
  const [usliderimage, setusliderimage] =useState('');
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
      const response = await axios.post("/api/admin/slider", data);
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
        title: "Slider added",
        description: "Slider added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      if (formType=="UPDATE") {
        router.push('/dashboard/add-slider/list')
      }
      if (formType=="POST") {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Input placeholder='Slider Name' size='md' defaultValue={data.name || ''}  {...register("slidername", { required: true })} />
        {errors.slidername && <Text color={'red'}>This field is required</Text>}
        {/* <Input placeholder='Slider Image' size='md' defaultValue={data.image || ''}  {...register("sliderimage")} /> */}
        <FileUpload
          label="Slider Image"
          imageUrl={data.image || usliderimage}
          setImageUrl={(url) => {
            // Set the image URL in the form data
            setValue("sliderimage", url);
            setusliderimage(url)
          }}
        />
        <Input placeholder='Slider Link' size='md' defaultValue={data.link || ''}  {...register("sliderlink")} />
        <Input type='hidden' value={formType} {...register("method")} />
        {formType == "UPDATE" ? <Input type='hidden' value={data.id} {...register("id")} /> : null}
        <Stack flexDir={'row'} justifyContent={'right'}>
          <Button type='button' onClick={() => router.push('/dashboard/add-slider/list')} colorScheme='blackAlpha' textTransform={'uppercase'}>List</Button>
          <Button type='submit' colorScheme='red' textTransform={'uppercase'}>Submit</Button>
        </Stack>
      </Stack>
    </form>
  )
}
