import React from 'react'
import {
  useLoaderData,
} from "react-router-dom";
export default function Context() {
  const data = useLoaderData();
  return (
    <div className='content'>Context Page: {data.name}</div>
  )
}

