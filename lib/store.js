import { configureStore } from '@reduxjs/toolkit'
import slicesData from '@/lib/features/slices'

export const store = () => {
  return configureStore({
    reducer: { 
        favorites:  slicesData
    },
  })
}