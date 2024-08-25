import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCustomer } from '../redux/customerSlice';

const CustomerList = () => {
    const customers = useSelector(state => state.customers);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCustomer(id));
    };

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>
                        {customer.fullName} - {customer.email}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        {/* Add an Edit button to navigate to the edit form */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;