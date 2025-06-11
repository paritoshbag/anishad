"use client"
import Sidebar from "@/components/Sidebar";
import AddServiceForm from "@/components/ui/AddServiceForm";
import AddsliderForm from "@/components/ui/AddSliderForm";
import TestInputForm from "@/components/ui/TestInputForm";
import { Container, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  // return <div>My Post: {params.slug}</div>
  const [testdata, setTestData] =useState()


  const FetchTest = async (testId) => {
    try {
      const response = await axios.post('/api/admin/slider', {
        method: 'FIND', // Include a method field to indicate it's a delete operation
        id: testId,
      });
      if (response.status === 200) {
        // The test has been successfully deleted
        // updateFetch();
        // mutate();
        setTestData(response.data)
      } else {
        const data = response.data;
        console.error('Error :', data.message);
      }

    } catch (error) {
      console.log('Error:', error)
    }
  }
  useEffect(() => {
    FetchTest(params.slug)
  }, [])
  return (
    <Stack
      as={Container}
      maxW={'container.xl'}
    >
      <Sidebar>
        <Stack>
          {testdata ? 
          <AddsliderForm data={testdata} formType={'UPDATE'}/>
          :null}
        </Stack>
      </Sidebar>
    </Stack>
  )
}