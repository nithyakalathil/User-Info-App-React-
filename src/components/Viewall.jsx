import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

const [data,changedata]=useState(
   {"data": []}
)

const fetchdata=()=>{
    axios.get("https://reqres.in/api/users?page=1").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    
{data.data.map((value,index)=>{
    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

    <div class="card">
  <img src={value.avatar} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-text">{value.id}</h4>
    <h4 class="card-text">{value.email}</h4>
    <h4 class="card-text">{value.first_name}</h4>
    <h4 class="card-text">{value.last_name}</h4>
  </div>
</div>

    </div>})}


</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall