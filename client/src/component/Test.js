import React, { useState } from 'react'

const Test = () => {

  const [fields, setFields] = useState([{
    id: 1,
    firstName: "",
    lastName: ""
  }])


  const handleChangeInput = (i, e) => {
    console.log(e.target.value);
    const values = [...fields]
    values[i][e.target.name] = e.target.value
    setFields(values)
  }


  const handleAdd = (id) => {
    setFields([...fields, { id: id + 1, firstName: '', lastName: '' }])
  }

  const handleSubtract = (i) => {
    const values = [...fields]
    values.splice(i, 1)
    setFields([...values])
  }

console.log(fields);

  return (
    <div className='container p-5'>
      <div className=''>
        {fields.map((field, i) => (

          <div key={i} className="mb-3">
            <input type="text" name="firstName" className="form-control" placeholder='firstName' value={field.firstName}  onChange={e => handleChangeInput(i, e)}/>

            <input type="text"  name="lastName" className="form-control" placeholder='lastName' onChange={e => handleChangeInput(i, e)} />

            <button  value={field.lastName} onClick={() => handleAdd(i)} className="btn btn-primary">Add</button>

            <button disabled={field.id === 1} onClick={() => handleSubtract(i)} className="btn btn-primary">Remove</button>

          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>

      </div>

    </div>
  )
}

export default Test