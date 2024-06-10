import React, { useState } from 'react'
import Navbar from './Navbar'

const Adddata = () => {

const [data,changedata]=useState(
    {
        "id":"",
        "first":"",
        "last":"",
        "email":"",
    }
)

const inputH=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const read=()=>{
    console.log(data)
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">id</label>
<input type="text" className="form-control" name='id' value={data.id} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">first name</label>
    <input type="text" className="form-control" name='first' value={data.first} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">last name</label>
    <input type="text" className="form-control" name='last' value={data.last} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">email</label>
    <input type="text" className="form-control" name='email' value={data.email} onChange={inputH}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={read}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Adddata