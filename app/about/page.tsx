import Link from 'next/link'

export default function About(){
    return(
        <div>
            <h1 className = 'text-5xl font-bold'>This is about page</h1>
            <Link className = 'bg-sky-500 text-white border rounded border-sky-500 pt-2 pb-2 px-4 py-4' href = '/'> Back to main </Link>
        </div>
    )
}