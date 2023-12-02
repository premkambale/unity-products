import React from 'react'
import Main from './Components/Main/Route/Main'
import AOS from 'aos';
import 'aos/dist/aos.css';
import UnityContext from './Context/UnityContext';

const App = () => {

  React.useEffect(() => {
    AOS.init();

    // document.title ="Unity"

  }, [])

  console.log("App")
  return (
    <div className='App'>

  
      <UnityContext>
        <Main />
      </UnityContext>
    </div>
  )
}

export default App
