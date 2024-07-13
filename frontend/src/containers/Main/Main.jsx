import React from 'react';
import { Hero, Sidebar, Tiles } from '../../components';
import ToolSection from '../ToolSection/ToolSection';

const Main = () => {
  return (
    <main className='min-w-0'>
        <section className='box-border flex'>
            <Sidebar />
            <div className='overflow-hidden w-full flex flex-col px-[2.58rem] gap-[2.59rem]'>
                <Hero />
                <Tiles />
                <ToolSection />
            </div>         
        </section>      
    </main>
  )
}

export default Main