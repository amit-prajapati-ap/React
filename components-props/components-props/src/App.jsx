import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import profil1 from './assets/profile1.jpg'
import profil2 from './assets/profile2.jpg'
import profil3 from './assets/profile3.jpg'

function App() {

  return (
    <div className='container'>
     <UserCard style={{"border-radius":"10px"}} image={profil1} name="Amit" desc="Roll no. : 05"/>
     <UserCard style={{"border-radius":"10px"}} image={profil2} name="Pratham" desc="Roll no. : 40"/>
     <UserCard style={{"border-radius":"10px"}} image={profil3} name="Chirag" desc="Roll no. : 07"/>
    </div>
  )
}

export default App
