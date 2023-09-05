import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import foto1 from '../image/foto.jpg'
import foto2 from '../image/foto2.jpg'
import foto3 from '../image/foto3.jpg'
import foto4 from '../image/foto44.jpg'
import './slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
    return (
        <div>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}

                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <img className='foto' src={foto1} alt="foto" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='foto' src={foto2} alt="foto" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='foto' src={foto3} alt="foto" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='foto' src={foto4} alt="foto" />
            </SwiperSlide>
            </Swiper>
            <h1>Всё о чём вы сейчас мечтаете, вы мечтаете потому, что у будущего вас это уже есть!!!</h1>
        </div>
    )
}

export default Slider
