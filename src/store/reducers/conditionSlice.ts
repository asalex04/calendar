import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState {
    column: string
    condition: string,
    value: string
    pageSize: number
    totalItemsCount: number
    currentPage: number
}

const initialState: IState = {
    column: 'Название',
    condition: 'равно',
    value: '',
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1
}

export const conditionSlice = createSlice({
    name: 'condition',
    initialState,
    reducers: {
        selectColumn(state, action: PayloadAction<string>) {
            state.column = action.payload
        },
    }
})

export const {selectColumn} = conditionSlice.actions
export default conditionSlice.reducer
