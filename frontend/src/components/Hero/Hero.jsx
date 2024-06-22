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
        <span className='-left-[2.5%] top-1/4 opacity-0 absolute text-[#00A6FF] z-20 my-prev-arrow'>
            <svg width="28" height="150" viewBox="0 0 28 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12L7 75l14 63" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
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
        <span className='opacity-0 text-[#00A6FF] -right-[2.5%] z-20 top-1/4 absolute my-next-arrow'>
            <svg width="28" height="150" viewBox="0 0 28 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L21 75L7 138" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </div>
  )
}

export default Hero