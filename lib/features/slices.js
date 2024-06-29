import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteLists: [],
    heroVideo: {
        videoid: null,
        show: false
    }
}

export const slices = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addToFavoriteLists(state, action) {
            let isExisted = state.favoriteLists.some((item) => item.id === action.payload.id)
            if (isExisted) {
                return
            }
            else {
                state.favoriteLists.push(action.payload)
            }
        },
        removeToFavoriteLists(state, action) {
            state.favoriteLists = state.favoriteLists.filter((item) => item.id !== action.payload.id)
        },

        showVideo(state, action) {
            state.heroVideo.show = true
            state.heroVideo.videoid = action.payload
        },
        hideVideo(state, action) {
            state.heroVideo.show = false
            state.heroVideo.videoid = action.payload
        }
    },
})


export const { addToFavoriteLists, removeToFavoriteLists, showVideo,hideVideo } = slices.actions

export default slices.reducer