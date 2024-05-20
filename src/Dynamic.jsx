import React, { useState } from 'react'

const Dynamic = () => {

    const [input,setInput] = useState([
        {id : 1,name : "" ,email : "", salary :""}
    ]);
   
    const AddMore =() =>{
        let NewInput = {id :Date.now(),name : "" ,email: "",salary:""};
        setInput([...input,NewInput])
    }
    const removeR =(id) =>{
        setInput(input.filter((e)=> e.id !== id))
        alert("Remove")
    }
  return (
    <div align="center" className='p-4'>
      <h1 className='pb-4'># Dynamic-Form-Componant #</h1>
      <table class="table table-success bg-primary fs-5 shadow" >
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">salary</th>
      <th scope="col"><button className='bg-primary ps-3 pe-3 fs-3 text-white' onClick={ () => AddMore()}>+</button></th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
        input.map((item) => {
            return (
                <tr>
      
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
      <td><button className='bg-danger  ps-3 pe-3 fs-4 text-white' onClick={ () => removeR(item.id)}>X</button></td>
      
    </tr>
            )
        })
    }
   
  </tbody>
</table>
    </div>
  )
}

export default Dynamic
