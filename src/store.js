import { configureStore, createSlice } from '@reduxjs/toolkit'
import { slideImage }  from '../public/data/data';

let slideImageData = createSlice({
    name : 'slideImageData',
    initialState : slideImage
})
export default configureStore({
  reducer: {
     slideImageData : slideImageData.reducer
   }
}) 