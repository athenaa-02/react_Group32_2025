import React from 'react'
import { useParams } from 'react-router-dom'



function JobDetails() {
const {id} = useParams('/:id')
console.log(id)

  return (
   <>
   <h1>djhf</h1>
   </>
  )
}

export default JobDetails