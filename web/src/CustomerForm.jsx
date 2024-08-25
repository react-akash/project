import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AddressForm from './AddressForm';
import { addCustomer } from '../redux/customerSlice';

const CustomerForm = () => {
    const dispatch = useDispatch();
    const [addresses, setAddresses] = useState([{}]);

    const formik = useFormik({
        initialValues: {
            pan: '',
            fullName: '',
            email: '',
            mobile: '',
            addresses: []
        },
        validationSchema: Yup.object({
            pan: Yup.string().required('PAN is required').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format').max(10),
            fullName: Yup.string().required('Full Name is required').max(140),
            email: Yup.string().email('Invalid email format').required('Email is required').max(255),
            mobile: Yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Invalid mobile number').max(10),
        }),
        onSubmit: (values) => {
            dispatch(addCustomer(values));
        }
    });

    const handlePanChange = async (e) => {
        formik.handleChange(e);
        const pan = e.target.value;
        if (pan.length === 10) {
            const response = await axios.post('lab.pixel6.co/api/verify-pan.php', { panNumber: pan });
            if (response.data.isValid) {
                formik.setFieldValue('fullName', response.data.fullName);
            }
        }
    };
    const handlePostcodeChange = async (e, index) => {
        const postcode = e.target.value;
        if (/^[0-9]{6}$/.test(postcode)) {
            const response = await axios.post('lab.pixel6.co/api/get-postcode-details.php', { postcode });
            const updatedAddresses = [...addresses];
            updatedAddresses[index] = {
                ...updatedAddresses[index],
                state: response.data.state[0].name,
                city: response.data.city[0].name
            };
            setAddresses(updatedAddresses);
        }
    };

    const addAddress = () => {
        if (addresses.length < 10) {
            setAddresses([...addresses, {}]);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>PAN</label>
                <input name="pan" onChange={handlePanChange} value={formik.values.pan} />
                {formik.errors.pan ? <div>{formik.errors.pan}</div> : null}
            </div>
            <div>
            <label>Full Name</label>
                <input name="fullName" onChange={formik.handleChange} value={formik.values.fullName} />
                {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
            </div>
            <div>
                <label>Email</label>
                <input name="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div>
                <label>Mobile (+91)</label>
                <input name="mobile" onChange={formik.handleChange} value={formik.values.mobile} />
                {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
            </div>
            <div>
                <h3>Addresses</h3>
                {addresses.map((address, index) => (
                    <AddressForm key={index} index={index} handlePostcodeChange={handlePostcodeChange} />
                ))}
                {addresses.length < 10 && <button type="button" onClick={addAddress}>Add Address</button>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm