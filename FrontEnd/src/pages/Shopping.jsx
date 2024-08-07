import React from 'react'
import {
  useLoaderData,
} from "react-router-dom";
export default function Shopping() {
  const data = useLoaderData();
  return (
    <div className='content'>Shopping Page: {data.name}</div>
  )
}

