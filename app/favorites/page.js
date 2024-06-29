'use client'
import Title from '@/components/Title'
import Card from '@/components/card/Card';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Favorites() {
    const { favoriteLists } = useSelector((state) => state.favorites)

    return (
        <div className="my-9 pl-3">
            {favoriteLists.length > 0 ?
                (
                    <>
                        <Title title='Your Favorites' />
                        <div className='flex gap-3 mt-7 flex-wrap max-md:justify-center h-full w-full'>
                            {
                                favoriteLists?.map((anime, index) => (
                                    <Card item={anime} key={index} isFavorite={true} />
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className="flexCenter flex-col h-full w-full">
                        <img src="/empty-watchlist.png" className='imgSelectNone' alt="Empty Eatch List" />
                        <p>Your Watchlist needs some love.</p>
                        <p>Let’s fill it up with awesome anime.</p>
                    </div>
                )
            }
        </div >
    )
}
