import './Sistema.css'
import React, { useState } from 'react';

const Sistema = (props) => {
    const [selectValue, setSelectValue] = useState(null);  
    
    return (

        <div className="sistema">
            <label>{props.label}
                <select required={props.required} value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </label>
        </div>
       

        

        
    )
}

export default Sistema