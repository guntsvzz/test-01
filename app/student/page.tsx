'use client'

import Link from 'next/link'
import { TextField } from '@mui/material';

export default function About(){
    return(
        <div>
            <h1 className = 'text-5xl font-bold'>Name</h1>
            <TextField id="standard-basic" label="name" variant="standard" />
            <h1 className = 'text-5xl font-bold'>Password</h1>
            <TextField id="standard-basic" label="password" variant="standard" />
            <br></br><br></br>
            <Link className = 'bg-sky-500 text-white border rounded border-sky-500 pt-2 pb-2 px-4 py-4' href = ''> Confirm </Link>
        </div>
    )
}