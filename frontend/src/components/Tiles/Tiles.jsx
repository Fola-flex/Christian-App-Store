import React, { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { bible } from '../../assets';
import { client } from '../../client';
register()

const Tiles = () => {
    const swipeRef = useRef(null)
    const [ tile, setTile ] = useState([]);

    useEffect(() => {
        client
            .fetch(`*[_type == "card"] | order(order asc) {
                order,
                category,
                cardName,
                description,
                button,
                images{
                    asset->{
                        url
                    }
                }
            }`)
            .then((data) => {
                setTile(data)
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        const swiperContainer = swipeRef.current;
        const params = {
          navigation: {
            prevEl: ".previous-arrow",
            nextEl: ".next-arrow",
          }
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
      }, []);

  return (
    <div className='w-full show-button relative'>
        <span className='-left-[2%] top-1/4 opacity-0 absolute text-[rgb(0,166,255)] z-20 previous-arrow'>
            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10L8 30l12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
        <swiper-container 
            ref={swipeRef} 
            init="false" 
            class="flex w-full items-start gap-4" 
            navigation="true" 
            space-between="18" 
            slides-per-view="3"
            speed="500" 
            css-mode="true"
            slides-per-group="3"
            className='flex flex-wrap'
        >
            {tile.map((value, index) => {
                return (
                    <swiper-slide>
                        <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-2 pl-[1.5rem] pt-[1.6rem] pb-[1.75rem] hover:opacity-70'>
                            <div className='flex w-3/5 flex-col gap-[3.1rem]'>
                                <div className='flex w-full flex-col gap-[0.5rem]'>
                                    <p className='text-textSecondary tracking-[0.006rem] leading-primary uppercase text-[0.7rem]'>{value.category}</p>
                                    <h1 className='text-textPrimary font-google tracking-[0.076rem] font-medium leading-[1.67rem] text-heading lg:text-sm'>{value.cardName}</h1>
                                    <p className='text-textSecondary text-[0.84rem] tracking-[0.0175em] font-light pr-3.5 leading-[0.89rem] font-jost'>{value.description}</p>
                                </div>
                                <p className="text-[0.73rem] leading-primary text-[#00A6FF]"><a>{value.button}</a></p>
                            </div>
                            <div className='w-[11rem] h-full pr-2'>
                                <img src={value.images.asset.url} className='w-full h-full' alt='bible icon' />
                            </div>
                        </div>
                    </swiper-slide>
                ) 
            })}
        </swiper-container>
        <span className='text-lg opacity-0 text-[#00A6FF] -right-[2%] z-20 top-1/4 absolute next-arrow'>
            <svg width="28" height="60" viewBox="0 0 28 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L20 30L8 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    </div>
  )
}

export default Tiles