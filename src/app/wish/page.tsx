'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from "swiper/modules";
import '@fontsource/anuphan/300.css';
import '@fontsource/anuphan/400.css';
import '@fontsource/anuphan/500.css';
import '@fontsource/anuphan/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
export const runtime = "edge";

const Wish = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Anuphan, sans-serif',
    },
  });

  return (
    <div className="bg-gradient-to-r from-blue-500 to-fuchsia-600 min-h-screen flex flex-col justify-center items-center">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <h1 className="text-3xl mt-4 text-center text-blue-400 bg-black/30 px-3 py-2 rounded-2xl inline-block">Happy Birthday kub teeruk 💖🎂</h1>
      <h2 className="text-2xl mt-2 text-center">16 Years</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation
        style={{ width: '22rem', height: '70%', borderRadius: '1rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', marginTop: '1rem' }}
      >
        <SwiperSlide><img src="/images/1.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/2.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/3.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/4.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/5.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/6.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/7.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
        <SwiperSlide><img src="/images/8.jpg" alt="Birthday Image" className="rounded-xl fade-in" /></SwiperSlide>
      </Swiper>
      <div className="bg-white w-4/4 p-5 mx-auto flex flex-col items-center rounded-2xl shadow-xl mt-5 text-">

        <p className="text-lg text-center ">
          สุขสันต์วันเกิดนะครับที่รัก ขอให้มีความสุขมากๆ อยู่กับเค้าไปนานๆนะะ เค้ารักเธอมากๆแล้วก็เค้าอยากให้เธอมีความสุขในทุกๆวันนะะะ
          <br />เว็บนี้เป็นเว็บที่เค้าตั้งใจทำให้เธอมากหวังว่าเธอจะชอบนะ
        </p>
      </div>

      <a href="/" className="mt-5">
        <ThemeProvider theme={theme}>
          <Button variant='contained' className="bg-pink-500 text-white py-2 px-4 rounded-lg transition transform hover:scale-105">
            <i className="fas fa-light fa-house mr-1"></i> กลับไปหน้าหลัก
          </Button>
        </ThemeProvider>
      </a>


      <footer className="bottom-0 w-full text-center py-4 text-lg">
          <p>Made By <a className="transition transform hover:text-red-600" href='https://jittiphat.site'>Jittiphat Somsai</a></p>
          <p className='hover:text-yellow-500'><a href='https://github.com/Jittiphatz/Happy-Birthday-to-my-gf'>Source Code</a></p>
        </footer>
    </div>
  );
};

export default Wish;