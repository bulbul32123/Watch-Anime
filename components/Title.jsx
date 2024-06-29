import React from 'react'

export default function Title({ title }) {
    return (
        <div className="">
            <h1 className="sm:text-4xl text-2xl font-light title-font mb-2 text-white">{title}</h1>
            <div className="h-1 w-32 bg-red-600 rounded"></div>
        </div>
    )
}
