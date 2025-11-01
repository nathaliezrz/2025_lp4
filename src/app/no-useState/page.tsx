'use client'

import { MouseEvent } from 'react';

export default function Page() {
    let count = 0;

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        count = count + 1;
        console.log(count);
    }

    return (
        <div className="flex flex-col min-h-screen min-w-screen items-center justify-center">
            <p>Count: {count}</p>
            <button className="text-base p-2 border-black border-2 rounded-md cursor-pointer" onClick={handleClick}>Increment</button>
        </div>
    );
}