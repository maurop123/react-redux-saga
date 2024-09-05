export const GET_TODOS_FETCH  = 'GET_TODOS_FETCH'
export const GET_TODOS_SUCCESS  = 'GET_TODOS_SUCCESS'

export const getTodosFetch = () => ({
  type: GET_TODOS_FETCH
})

export type GetTodosAction = ReturnType<typeof getTodosFetch>
