"use client"
// we have used use client b/c we will use forms here
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState()
    const [shorturl, setshorturl] = useState()
    const [generate, setgenerate] = useState("")

    const generate1 = () => {
        // here copy pase from postman
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())

            .then((result) => {
                setgenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)

            }
            )
            .catch((error) => console.error(error));

    }
    return (
        <div className='mx-auto flex flex-col item-center bg-purple-100 my-10 w-[30vw]'>
            <h1 className='text-center font-bold text-xl py-1 text-[#844bb7]'>Generate Your short URLs</h1>
            <div className='p-2 flex flex-col gap-2 items-center justify-center'>
                <input className='focus:outline-purple-400 px-5 bg-purple-50 ' type="text" value={url} placeholder='Enter Your URL' onChange={(e) => seturl(e.target.value)} />
                <input className='focus:outline-purple-400 px-5 bg-purple-50' type="text" value={shorturl} placeholder='Enter Your preferred URL' onChange={(e) => setshorturl(e.target.value)} />
                <button className='bg-[#c27aff] text-white font-bold rounded-lg py-1 px-2' onClick={generate1}>Generate</button>
            </div>
            <div>
                {generate && <>
                    <span className='font-bold text-lg'> Your Link </span>
                    <div><code> <Link target='_blank' href={generate}>{generate}</Link>
                    </code></div>
                </>
                }
            </div>

        </div>
    );
}

export default Shorten;
