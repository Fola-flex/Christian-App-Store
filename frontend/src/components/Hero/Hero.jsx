import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle'
import { ark } from '../../assets';
register();

const Hero = () => {
    const swiperRef = useRef(null)
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
          navigation: {
            prevEl: ".my-prev-arrow",
            nextEl: ".my-next-arrow",
          }
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
      }, []);

  return (
    <div className='show-button w-full h-[22.8rem] rounded-b-lg relative'>
        <span className='text-lg -left-[2%] top-1/2 opacity-0 absolute text-red-700 z-20 my-prev-arrow'> ?</span>
        <swiper-container ref={swiperRef} init="false" class="background w-full h-full" navigation="true" slides-per-view="1"speed="500" css-mode="true">
            <swiper-slide class="back">
                <img className='w-full h-full' src={ark} alt='Slider image'/>
            </swiper-slide>
            <swiper-slide class="back">
                <img className='h-full w-full' src={ark} alt='Slider image'/>
            </swiper-slide>
            <swiper-slide class="back">
                <img className='h-full w-full' src={ark} alt='Slider image'/>
            </swiper-slide>
            <swiper-slide class="back">
                <img className='h-full w-full' src={ark} alt='Slider image'/>
            </swiper-slide>
        </swiper-container>
        <span className='text-lg opacity-0 text-red-600 -right-[2%] z-20 top-1/2 absolute bg-red my-next-arrow'> 98</span>
    </div>
  )
}

export default Hero