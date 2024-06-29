import React from 'react';
import { Hero, Sidebar, Tiles, ToolSection } from '../../components';

const Main = () => {
  return (
    <main className='min-w-0'>
        <section className='box-border flex'>
            <Sidebar />
            <div className='overflow-hidden w-full flex flex-col px-[2.478rem] gap-10'>
                <Hero />
                <Tiles />
                <ToolSection />
            </div>         
        </section>      
    </main>
  )
}

export default Main