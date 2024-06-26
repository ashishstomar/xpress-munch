import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(item => item.card.info.id === action.payload.card.info.id)
            if(item) {
                item.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        incrementItem: (state, action) => {
            const item = state.items.find((item) => item.card.info.id === action.payload.card.info.id );
            console.log(item)
            if(item) {
                item.quantity += 1;
            } 
        },
        decrementItem: (state, action) => {
            const item = state.items.find((item) => item.card.info.id === action.payload.card.info.id );
            console.log(item)
            if(item) {
                item.quantity -= 1;
                if (item.quantity < 1) {
                    state.items = state.items.filter(item => item.id !== action.payload.card.info.id)
                }    
            } 
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, decrementItem, incrementItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;