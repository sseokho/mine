import { configureStore, createSlice } from '@reduxjs/toolkit'
import { slideImage, product }  from '../public/data/data';

let slideImageData = createSlice({
    name : 'slideImageData',
    initialState : slideImage
})

let productData = createSlice({
  name : 'productData',
  initialState : product
})
export default configureStore({
  reducer: {
     slideImageData : slideImageData.reducer,
     productData : productData.reducer
   }
}) 