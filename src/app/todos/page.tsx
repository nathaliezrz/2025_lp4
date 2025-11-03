'use client'
import { useState } from 'react'

type PageProps = {
    name: string,
    description: string
}

function Card(props: PageProps){
    return(
        <div className="flex flex-row justify-between items-center
        outline outline-gray-500 rounded-[7px] p-[10px] mb-[10px] mt-[5px] ml-[5px] mr-[5px]">
            <p>Todo {props.name} - {props.description}</p>
            <button className="bg-red-500 text-white rounded-[5px] p-[5px]">delete</button>
        </div>
    )
}

export default function Page() {
        return (
        <div className="flex justify-center">
        <div className="w-[500px]">
        <h1 className="font-bold text-[20px] ml-[5px]">TODOs</h1>
        <div className="flex flex-col">
            <input className="outline outline-gray-500 rounded-[7px] p-[10px] m-[5px]" type="text" placeholder="title"/>
            <input className="outline outline-gray-500 rounded-[7px] p-[10px] m-[5px]" type="text" placeholder="description"/>
            <div className="flex flex-row justify-evenly items-center">
                <button className="outline outline-gray-950 bg-gray-800 text-white rounded-[7px] w-[50%] p-[10px] m-[5px]">add List</button>
                <button className="outline outline-green-600 bg-green-500 text-white rounded-[7px] w-[50%] p-[10px] m-[5px]">add TODO</button>
            </div>
        </div>
        <h1 className="font-bold text-[20px] ml-[5px]">Your TODOs</h1>
        <Card name="1" description="Description 1"/>
        <Card name="2" description="Description 2"/>
        <Card name="3" description="Description 3"/>
        </div>
        </div>
    )
}
