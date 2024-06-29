import React from 'react'
import HeroBtn from './HeroBtn';
import { items } from '@/data/data';
import { formatNumber } from './Number';
import Stars from '../Stars';

export const getRandomItem = () => {
    const popularItems = items?.filter((item) => item?.category === 'popular')
    const ItemsID = popularItems?.map((ite, _) => ite.id)
    const randomId = Math.floor(Math.random() * ItemsID.length)
    const randomItem = items[randomId]
    return randomItem
}

export default function Hero() {
    const randomItem = getRandomItem()

    return (
        <>
            <section className="bg-black pb-6 sm:pb-8 lg:pb-12 -mt-24">
                <div className="mx-auto max-w-screen-2xl">
                    <section className="h-[44rem] md:pl-10 relative flex flex-1 shrink-0 items-center justify-start overflow-hidden py-16 shadow-lg md:py-40">
                        <img src={randomItem?.banner} loading="lazy" alt={randomItem?.title[0]} className="absolute inset-0 h-full w-full select-none pointer-events-none  opacity-75 object-cover object-center" />
                        <div className="w-full inset-1 h-40 blur-3xl opacity-70 absolute -top-10 bg-black left-0" />
                        <div className="w-1/3 inset-1 h-full blur-3xl opacity-70 absolute top-0 roun bg-black -left-5" />

                        <div className="relative flex flex-col items-start  justify-start p-4 sm:max-w-xl">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4 md:text-6xl ">{randomItem?.title[0]}</h1>
                            <div className="flex gap-1 items-center pl-1 pb-3">
                                <Stars rating={randomItem?.rating} />
                                <p className='text-sm pt-1 pl-2'>base on
                                    <span className='px-1 text-red-600'>
                                        {formatNumber(randomItem?.numreviews)}
                                    </span>
                                    reviews</p>
                            </div>
                            <div className="flex gap-2 items-center ml-1 pb-3">
                                {randomItem?.genres?.slice(0, 3).map((gen, index) => (
                                    <span key={index} className='border select-none border-red-600 py-0.5 px-3 rounded-sm font-light text-sm'>{gen}</span>
                                ))
                                }
                            </div>
                            <div className="pl-1">
                                <p className='text-gray-200 pb-3'>
                                    {randomItem?.description?.slice(0, 150) + '...'}
                                </p>
                            </div>

                            <div className="flex w-full flex-col gap-2.5 sm:flex-row   sm:justify-between">
                                <HeroBtn item={randomItem} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
