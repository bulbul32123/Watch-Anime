import Title from '@/components/Title'
import Card from '@/components/card/Card'
import { items } from '@/data/data'
import React from 'react'

export default function Animes() {
    return (
        <div className="my-4 pl-4">
            <Title title='Animes' />
            <div className='flex gap-3 mt-7 flex-wrap h-full w-full'>
                {
                    items?.map((anime, index) => (
                        <Card item={anime} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
