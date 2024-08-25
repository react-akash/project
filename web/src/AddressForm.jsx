import React from 'react';

const AddressForm = ({ index, handlePostcodeChange }) => {
    return (
        <div>
            <label>Address Line 1</label>
            <input name={addresses[${index}].line1} required />

            <label>Address Line 2</label>
            <input name={addresses[${index}].line2} />

            <label>Postcode</label>
            <input name={addresses[${index}].postcode} required onChange={(e) => handlePostcodeChange(e, index)} />

            <label>State</label>
            <select name={addresses[${index}].state} required>
                {/* Options should be prefilled via API */}
            </select>

            <label>City</label>
            <select name={addresses[${index}].city} required>
                {/* Options should be prefilled via API */}
            </select>
        </div>
    );
};

export default AddressForm;