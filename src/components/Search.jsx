import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

const [data,changedata]=useState(
    {
        "name":""
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
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputH}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success"onClick={read}>Search</button>

        </div>
    </div>
</div>

    </div>
  )
}

export default Search