import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} max={20000} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;