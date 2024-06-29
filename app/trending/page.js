import Title from '@/components/Title'
import Card from '@/components/card/Card'
import { items } from '@/data/data'
import React from 'react'

export default function Trending() {
    const trendingItems = items?.filter((item) => item?.category2 === 'trending')
    return (
        <div className="my-4 pl-4">
            <Title title='Trending Animes' />
            <div className='flex gap-3 mt-7 max-md:justify-center flex-wrap h-full w-full'>
                {
                    trendingItems.map((anime, index) => (
                        <Card item={anime} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
