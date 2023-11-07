import React from 'react'
import Main from './Components/Main/Route/Main'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  React.useEffect(() => {
    AOS.init();

  }, [])
  
  console.log("App")
  return (
    <div className='App'>
      <Main />
    </div>
  )
}

export default App
