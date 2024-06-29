import Title from '@/components/Title'
import Card from '@/components/card/Card';
import { items } from '@/data/data'
import React from 'react'

export default function PopularSection({searchParams}) {
    const popularItems = items?.filter((item)=> item?.category === 'popular')

    return (
        <div className="my-9 pl-3">
            <Title title='Popular Animes' />
            <div className='flex gap-3 mt-7 flex-wrap h-full max-md:justify-center w-full'>
                {
                    popularItems?.map((anime, index) => (
                        <Card item={anime} key={index} searchParams={searchParams}/>
                    ))
                }
            </div>
        </div>
    )
}
