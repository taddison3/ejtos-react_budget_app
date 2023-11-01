import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{
            border: 'None',
            padding: '3px',
            borderRadius: '50%',
            backgroundColor: 'green',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bolder',
            textAlign: 'center',
            height: '30px',
            width: '30px',
            padding: '0px',
            paddingLeft: '4px',
            paddingBottom: '5px',
            display: 'flex',
            alignItems: 'center',
        }}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={{
            border: 'None',
            padding: '3px',
            borderRadius: '50%',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bolder',
            textAlign: 'center',
            height: '30px',
            width: '30px',
            padding: '0px',
            paddingLeft: '8px',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
        }}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;