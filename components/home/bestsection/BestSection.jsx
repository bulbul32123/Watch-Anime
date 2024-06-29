import Title from '@/components/Title'
import Card from '@/components/card/Card'
import { items } from '@/data/data'
import React from 'react'

export default function BestSection({ searchParams }) {
    const bestItems = items?.filter((item) => item?.category !== 'popular')
    return (
        <div className="my-9 pl-3">
            <Title title='Best Animes' />
            <div className='flex gap-3 mt-7 flex-wrap max-md:justify-center h-full w-full'>
                {
                    bestItems?.map((anime, index) => (
                        <Card item={anime} key={index} searchParams={searchParams} />
                    ))
                }
            </div>
        </div>
    )
}
