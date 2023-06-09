'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <h1 className = 'text-5xl font-bold'> Hello World</h1>
      <Link className = 'bg-sky-500 text-white border rounded border-sky-500 pt-2 pb-2 px-4 py-4' href = '/about'> About </Link>
      <Button variant="contained">Contained Button</Button>
    </div>

  )
}
