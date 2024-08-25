import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customers',
    initialState: [],
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        deleteCustomer: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;