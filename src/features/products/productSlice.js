// src/features/products/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  succulents: [
    { id: 1, name: 'Aloe Vera', price: 10, image: '../../../public/images/main-qimg.png', isInCart: false },
    { id: 2, name: 'Echeveria', price: 12, image: '../../../public/images/echeveria-colorata.jpg', isInCart: false },
  ],
  ferns: [
    { id: 3, name: 'Boston Fern', price: 15, image: '../../../public/images/boston-fern.jpg', isInCart: false },
    { id: 4, name: 'Maidenhair Fern', price: 18, image: '../../../public/images/maidenhair-fern.jpg', isInCart: false },
  ],
  cacti: [
    { id: 5, name: 'Golden Barrel Cactus', price: 20, image: '../../../public/images/grande.jpg', isInCart: false },
    { id: 6, name: 'Bunny Ear Cactus', price: 22, image: '../../../public/images/BunnyEarCactus.jpeg', isInCart: false },
  ],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productSlice.reducer;
