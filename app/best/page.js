import Title from '@/components/Title'
import Card from '@/components/card/Card'
import { items } from '@/data/data'
import React from 'react'

export default function Best() {
    const bestItems = items?.filter((item) => item?.category !== 'popular')
    return (
        <div className="my-4 pl-4">
            <Title title='Manga' />
            <div className='flex gap-3 mt-7 flex-wrap max-md:justify-center h-full w-full'>
                {
                    bestItems?.map((anime, index) => (
                        <Card item={anime} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
