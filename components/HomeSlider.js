import { Box, Image, Skeleton, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { useDataFetching } from '@/hooks';
export default function HomeSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
    const { data, loading } = useDataFetching(
        '/api/admin/slider'
    );
    if (loading) {
        return (
            <Box rounded={'2xl'} shadow={'lg'} border='1px' borderColor='gray.200' position={'relative'} height={'full'} width={'full'} overflow={'hidden'}>
            <Skeleton
              rounded={'2xl'}
              shadow={'2xl'}>
              <Stack
                height={['200px','300px','300px','450px']}
              ></Stack>
              </Skeleton>
            </Box>
        )
    } else {
        return (
            <Box rounded={'2xl'} shadow={'lg'} border='1px' borderColor='gray.200' position={'relative'} height={'full'} width={'full'} overflow={'hidden'}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    // centeredSlides={true}
                    spaceBetween={6}
                    autoplay={{
                        delay: 2600,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   type: 'fraction',
                    // }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="myHomeSwipertest"
                >
                    {data.map((item) => {
                        const mylink = item.image;

                        // Replace 'http' with 'https'
                        const updatedLink = mylink.replace(/^http:/, 'https:');
                        return (
                            <SwiperSlide key={item.id}>
                                <Image
                                    src={updatedLink}
                                    objectFit='contain'
                                />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </Box>
        )
    }
}
