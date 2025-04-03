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

let productReviewSlice = createSlice({
  name : "productReview",
  initialState : {
    add : [],
    load : [],
  },
  reducers : {
    addReview: (state,action) => {
      state.add.push(action.payload);
    },
    loadReview: (state,action) => {
      state.load = action.payload;
    }
  }
})


export const { addReview, loadReview } = productReviewSlice.actions;

export default configureStore({
  reducer: {
     slideImageData : slideImageData.reducer,
     productData : productData.reducer,
     productReview :  productReviewSlice.reducer
   }
}) 