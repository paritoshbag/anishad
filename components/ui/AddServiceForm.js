"use client"
import { Button, Checkbox, Input, Select, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload';
import TextEditor from './TextEditor';

export default function AddServiceForm({ data, formType }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const [usliderimage, setusliderimage] = useState('');

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
      const response = await axios.post("/api/admin/addservice", data);
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
        title: "Service added",
        description: "Service added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      if (formType == "UPDATE") {
        router.push('/dashboard/add-service/list')
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
        <Select placeholder='Select Category' defaultValue={data.category || 'imaging'}   {...register("category", { required: true })} >
          <option value='imaging'>Imaging</option>
          <option value='cardiology'>Cardiology</option>
          {/* <option value='neurology'>Neurology</option> */}
          <option value='packagetest'>Package Test</option>
          <option value='clinicalpathology'>Clinical Pathology</option>
          <option value='pathology'>Pathology</option>
        </Select>
        {errors.category && <Text color={'red'}>This field is required</Text>}
        <Input placeholder='Service Name' size='md' defaultValue={data.name || ''}  {...register("servicename", { required: true })} />
        {errors.servicename && <Text color={'red'}>This field is required</Text>}
        {/* <Input placeholder='Service Image' size='md' defaultValue={data.image || ''}  {...register("serviceimage")} /> */}
        <FileUpload
          label="Service Image"
          imageUrl={data.image || usliderimage}
          setImageUrl={(url) => {
            // Set the image URL in the form data
            setValue("serviceimage", url);
            setusliderimage(url)
          }}
        />
        {/* <Textarea placeholder='Service Description' size='md' defaultValue={data.description || ''}   {...register("servicedescription")} /> */}
        {/* <Textarea placeholder='Our Facility' size='md' defaultValue={data.facility || ''}   {...register("ourfacility")} /> */}
        <TextEditor
          title={'Service Description'}
          value={data.description || ''}
          onChange={(val) => {
            setValue("servicedescription", val);
          }}
        />
        <TextEditor
          title={'Our Facility'}
          value={data.facility || ''}
          onChange={(val) => {
            setValue("ourfacility", val);
          }}
        />
        <Input type='hidden' value={formType} {...register("method")} />
        {formType == "UPDATE" ? <Input type='hidden' value={data.id} {...register("id")} /> : null}
        <Stack flexDir={'row'} justifyContent={'right'}>
          <Button type='button' onClick={() => router.push('/dashboard/add-service/list')} colorScheme='blackAlpha' textTransform={'uppercase'}>List</Button>
          <Button type='submit' colorScheme='red' textTransform={'uppercase'}>Submit</Button>
        </Stack>
      </Stack>
    </form>
  )
}
