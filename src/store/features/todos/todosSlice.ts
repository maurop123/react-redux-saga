import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<any>) => {
      return { ...state, todos: action.todos }
    }
  }
})

export const { getTodos } = todosSlice.actions

export default todosSlice.reducer
