'use client'

import { MouseEvent, useEffect, useState } from 'react';

export default function Page() {
    const [count, setCount] = useState(0);

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <div className="flex flex-col min-h-screen min-w-screen items-center justify-center">
            <p>Count: {count}</p>
            <button className="text-base p-2 border-black border-2 rounded-md cursor-pointer" onClick={handleClick}>Increment</button>
        </div>
    );
}