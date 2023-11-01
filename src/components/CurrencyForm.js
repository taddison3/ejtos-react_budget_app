import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../currency_select.css'

const CurrencyForm = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState('');

    const handleCurrencyChange = (selection) => {
        setNewCurrency(selection);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selection,
        });
    };

    return (
        <div>

            <div className="input-group mb-3" style={{ marginLeft: '2rem', alignContent:'center'}}>
                <select className="currency-select" id="currencySelect" onChange={(event) => handleCurrencyChange(event.target.value)}
                style = {{
                    backgroundColor: '#82E0AA',
                    borderRadius: '2px',
                    border: 'none',
                    textColor: 'white'
                }}
                >
                    <option style={{display:'none'}}>Currency (£ Pound)</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Ruppee</option>
                </select>

                </div>
        </div>
    );
};

export default CurrencyForm;