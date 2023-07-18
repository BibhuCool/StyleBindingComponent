
import { useState } from "react";

export const StyleBindingComponent = () =>{
    const[backcolor,setBackColor] = useState('');
    const[textcolor,setTextColor] = useState('');
    const[align,setAlign] = useState('');

    const changeBackColor = (event) =>{
        setBackColor(event.target.value)

    }

    const changeTextColor = (event) =>{
        setTextColor(event.target.value)

    }

    const changeAlign = (event) =>{
        setAlign(event.target.value)

    }
    return(
        <>
            <div className="container-fluid">
            <h1>Select Style</h1>
            <dl>
                <dt>Background Color</dt>
                <dd>
                    <select className="form-select w-25" onChange={changeBackColor}>
                        <option value='black'>Black</option>
                        <option value='red'>Red</option>
                        <option value='yellow'>Yellow</option>
                    </select>
                </dd>
                <dt>Color</dt>
                <dd>
                    <select className="form-select w-25" onChange={changeTextColor}>
                    <option value='white'>While</option>
                    <option value='red'>Red</option>
                    <option value='yellow'>Yellow</option>

                    </select>
                </dd>
                <dt>Change Alignment</dt>
                <dd>
                    <input onChange={changeAlign} type="radio" name="align" value='left' /> Left
                    <input onChange={changeAlign} type="radio" name="align" value='center' /> Center
                    <input onChange={changeAlign} type="radio" name="align" value='right' /> Right
                </dd>
            </dl>
            <h1 style={{backgroundColor:backcolor,color:textcolor,textAlign:align}} className="p-4 w-50">Style Binding in React</h1>

            </div>
        </>
    )
}
