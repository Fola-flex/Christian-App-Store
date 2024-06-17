import React, { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { bible } from '../../assets';
register()

const Tiles = () => {
    const swipeRef = useRef(null)
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
        <span className='text-lg -left-[2%] top-1/2 opacity-0 absolute text-red-700 z-20 previous-arrow'> ?</span>
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
        >
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6 hover:opacity-70'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-1.5'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary font-google font-medium leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-1.5'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className='bg-[rgb(25,25,25)] w-full rounded-xl box-border flex items-center pr-3.5 pl-5 pt-5 pb-6'>
                    <div className='flex w-3/5 flex-col gap-11'>
                        <div className='flex w-full flex-col gap-2'>
                            <p className='text-textSecondary leading-primary text-small'>APP</p>
                            <h1 className='text-textPrimary leading-secondary text-heading'>The Bible Ecosystem to Properly Orient You</h1>
                            <p className='text-textSecondary text-medium pr-4 leading-primary font-jost'>Become everything God has created  you to be. Daily study, audio & prayer.</p>
                        </div>
                        <p className="text-small leading-primary text-[#00A6FF]"><a>Download Now</a></p>
                    </div>
                    <div className='w-2/5 h-full'>
                        <img src={bible} className='w-full h-full' alt='bible icon' />
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
        <span className='text-lg opacity-0 text-red-600 -right-[2%] z-20 top-1/2 absolute bg-red next-arrow'> 98</span>
    </div>
  )
}

export default Tiles