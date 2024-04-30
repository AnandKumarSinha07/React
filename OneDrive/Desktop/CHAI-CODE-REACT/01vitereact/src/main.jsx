import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//     type:'a',
//     props:{
//        href:'https://www.google.com/',
//        target:'_blank',
//     },
//     children:'click me to visit google'
// }

const reactElement=React.createElement(
    'a',
    {href:'https://www.google.com/',target:'_blank'},
    'click me to visit goodle'
)



function MyApp(){
    return(
      <div>
         <h1>Custom App</h1>
      </div>
    )
  }

const createElement=(
    <a href="https://www.google.com/" target="_blank">Visit Google</a>
)
    

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // createElement
    // reactElement
    <App/>
)
