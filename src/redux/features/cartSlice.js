import { createSlice } from '@redux/toolkit'

const initialState ={
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addCart: (state, action) => {
            const existingItem = state.cartItem
        }
    }
})