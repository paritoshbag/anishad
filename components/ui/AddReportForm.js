//AddSliderForm.js
"use client"
import { Button, Checkbox, FormControl, FormLabel, Input, Select, Stack, Switch, Text, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload';

export default function AddReportForm({ data, formType }) {
  const [loading, setLoading] = useState(false);
  const [upatientReport, setupatientReport] = useState('');
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
    console.log(data)
    try {
      const response = await axios.post("/api/admin/report", data);
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
        title: "Report added",
        description: "Report added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      if (formType == "UPDATE") {
        router.push('/dashboard/add-report/list')
      }
      if (formType == "POST") {
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Input placeholder='Patient Name' size='md' defaultValue={data.name || ''}  {...register("patientname", { required: true })} />
        {errors.patientname && <Text color={'red'}>This field is required</Text>}
        <Input placeholder='Mobile No' size='md' defaultValue={data.phone || ''}  {...register("patientphone", { required: true })} />
        {errors.patientphone && <Text color={'red'}>This field is required</Text>}
        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='with-letter-head' mb='0'>
            Upload file without Letter Head?
          </FormLabel>
          <Switch defaultChecked={data.withheader || true}  {...register('withletterhead')} />
        </FormControl>
        <FileUpload
          label="Report PDF"
          // imageUrl={data.image || usliderimage}
          setImageUrl={(url) => {
            // Set the image URL in the form data
            setValue("patientReport", url);
            setupatientReport(url)
          }}
        />

        <Input type='hidden' value={formType} {...register("method")} />
        {formType == "UPDATE" ? <Input type='hidden' value={data.id} {...register("id")} /> : null}
        <Stack flexDir={'row'} justifyContent={'right'}>
          <Button type='button' onClick={() => router.push('/dashboard/add-report/list')} colorScheme='blackAlpha' textTransform={'uppercase'}>List</Button>
          <Button type='submit' colorScheme='red' textTransform={'uppercase'}>Submit</Button>
        </Stack>
      </Stack>
    </form>
  )
}
