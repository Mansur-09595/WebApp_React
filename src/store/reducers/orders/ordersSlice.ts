import { createSlice } from "@reduxjs/toolkit";

const initialState:{basket: {id: string, count: number}[]} = {
    basket: []
};

export const basketSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push({id: action.payload, count: 1})
    }, 
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload)
    },
    incrementCount: (state, action) => {
      state.basket.map((item) => {
        if(item.id === action.payload){
          return {...item, count: item.count++}
        }
        return item
      })
    },
    decrementCount: (state, action) => {
     state.basket.map((item) => {
        if(item.id === action.payload){
          return {...item, count: item.count--}
        }
        return item
      })
    },
  },
  extraReducers: () => {},
   
});

export const { addToBasket, removeFromBasket, incrementCount, decrementCount } = basketSlice.actions

export default basketSlice.reducer;

