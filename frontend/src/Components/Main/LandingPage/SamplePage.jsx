import React from 'react'
import { useNavigate } from 'react-router-dom'

const SamplePage = () => {
 const navigate = useNavigate()

  const handleLanding=()=>{
    navigate("/LandingPage")

  }
  return (
    <div onClick={handleLanding}>sample_page</div>
  )
}

export default SamplePage

