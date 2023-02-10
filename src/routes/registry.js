import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Registry(){
    const [registryData,setRegistryData] = useState([])
    const [textinput, setTextinput]= useState("")
    const [error, setError]=useState(false)

    const addItem=(e)=>{
        e.preventDefault();
        if (error) return;
        const tempData= [...registryData];
        tempData.push(textinput)
        setRegistryData(tempData)
        setTextinput("")
    }

    const RemoveItem=(index)=>{
        const tempData= [...registryData];
        tempData.splice(index,1)
        setRegistryData(tempData)
    }

    const editItem=(index)=>{
        if (error) return;
        const tempData= [...registryData];
        tempData[index]=textinput;
        setRegistryData(tempData)
        setTextinput("")
    }

    useEffect(()=>{
        if(textinput.length>10) setError(true);
        else setError(false);
    },[textinput])

    console.log(registryData)

    return(
        <div>
            <h1 class="reg-head">Registry</h1>
            <Link to="/">Click here to go to Home</Link>
            <form onSubmit={addItem}>
                <label>text Input:
                    <input type="text" value={textinput} onChange={(e)=> setTextinput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{color: "red"}}>Error Occured</span> : null }
            {
                registryData.map((item,index)=>{
                    return(
                    <ul>
                    <li key={index}>{item} <button onClick={()=>RemoveItem(index)}>Remove</button> <button onClick={()=>editItem(index)}>Update</button></li>
                    </ul>
                    )
                })
            }
        </div>
    );
}

export default Registry;