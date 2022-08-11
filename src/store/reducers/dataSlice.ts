import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IData {
    id: number
    event: string
}

interface IState {
    setOfData: IData[]
    id: number
}

const initialState: IState = {
    setOfData: [],
    id: 0
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setID(state, action: PayloadAction<number>) {
            state.id = action.payload
        },
        setData(state, action: PayloadAction<IData>) {
            state.setOfData.push(action.payload)
        },
        removeData(state, action: PayloadAction<number>) {
            state.setOfData = state.setOfData.filter(el => el.id !== action.payload)}
    }
})

export const {setData, setID, removeData} = dataSlice.actions
export default dataSlice.reducer


