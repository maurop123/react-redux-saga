import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TileState {
  imgSrc: string
  title: string
}

interface TilesState {
  tiles: [TileState]
}

const initialState: TileState = {
  value: '',
  title: 'Default'
}

export const tileSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    pageNext: state => {
      return state
    },

  },

})
