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
  name : "productReivew",
  initialState : {
    list : [],
  },
  reducers : {
    setReviews: (state,action) => {
      state.list = action.payload;
    },
    addReview: (state,action) => {
      state.list.push(action.payload);
    }
  }
})


export const { setReviews, addReview } = productReviewSlice.actions;

export default configureStore({
  reducer: {
     slideImageData : slideImageData.reducer,
     productData : productData.reducer,
     productReview :  productReviewSlice.reducer
   }
}) 