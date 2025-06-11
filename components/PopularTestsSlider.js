
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Button, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function PopularTestsSlider({sliderCount, sliderInfo}) {
    const [swiperRef, setSwiperRef] = useState(null);
    const router = useRouter();
    // const sliderInfo =[
    //     {
    //         title:'TRIGLYCERIDES BLOOD',
    //         id:1
    //     },
    //     {
    //         title:'HDL CHOLESTEROL',
    //         id:2
    //     },
    //     {
    //         title:'SUGAR FASTING',
    //         id:3
    //     },
    //     {
    //         title:'SUGAR PP',
    //         id:4
    //     },
    //     {
    //         title:'TRIGLYCERIDES BLOOD',
    //         id:5
    //     },
    // ]

    return (
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={sliderCount}
            // centeredSlides={true}
            height={10}
            spaceBetween={2}
            autoplay={{
                delay: 2600,
                disableOnInteraction: false,
            }}
            pagination={{
              type: 'fraction',
            }}
            // navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwipertest"
        >
            {sliderInfo.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <Stack borderWidth={2} width={'xl'} p={6} rounded={'md'} shadow={'md'}>
                            {/* <Text textAlign={'left'} color={'#e1272c'} fontWeight={'bold'} fontSize={'xl'} textTransform={'uppercase'} >{item.title}</Text> */}
                            {/* <Text textAlign={'left'} color={'#000'} fontWeight={'bold'} fontSize={'md'} textTransform={'uppercase'} >{item.subtitle}</Text>
                            <Text textAlign={'left'} color={'#e1272c'} fontWeight={'bold'} fontSize={'3xl'} textTransform={'uppercase'} >₹ {item.price}</Text> */}
                            <Button colorScheme='red' textTransform={'uppercase'} onClick={()=>router.push(`/find-a-test/list/${item.id}`)}>{item.title}</Button>
                        </Stack>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
