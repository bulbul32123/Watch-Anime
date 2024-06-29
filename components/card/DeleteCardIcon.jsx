'use client'
import { removeToFavoriteLists } from '@/lib/features/slices'
import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'

export default function DeleteCardIcon({ isFavorite, item }) {
    const dispatch = useDispatch()
    return (
        <>
            {isFavorite && <span onClick={() => dispatch(removeToFavoriteLists(item))} className='absolute cursor-pointer top-0 z-[3] h-8 right-0 '>
                <FaCircleXmark size={18} color='red' />
            </span>}
        </>
    )
}
