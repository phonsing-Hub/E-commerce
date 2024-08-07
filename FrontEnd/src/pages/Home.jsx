import React from 'react';

export default function Home ()  {
  return (
    <div className='content grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 mx-[200px]'>
      {Array.from({ length: 40 }).map((_, index) => (
        <div key={index} className='border h-[200px]'>
          Content {index + 1}
        </div>
      ))}
    </div>

  );
};


