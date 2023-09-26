import { createSlice } from '@reduxjs/toolkit'

const initialState:any={
    data:[],
    infoData:[],
    profData:[]
}

export const quesSlice = createSlice({
  name: 'nameQues',
  initialState,
  reducers: {
    quesData:(state,action)=>{
        state.data.push(action.payload)
    },
    quesInfo:(state,action)=>{
        state.infoData.push(action.payload)
    },
    quesProf:(state,action)=>{
        state.profData.push(action.payload)
    }
}
})
export const {quesData ,quesInfo ,quesProf} = quesSlice.actions

export default quesSlice.reducer