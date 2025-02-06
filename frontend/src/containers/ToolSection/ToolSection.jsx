import React, { useEffect, useState } from 'react';
import { ToolCategory } from '../../components';

const ToolSection = () => {
  return (
    <div className='flex flex-col'>
        {
            Array.from(Array(4)).map((v, i) => <ToolCategory key={i} />)
        }
    </div>
  )
}

export default ToolSection