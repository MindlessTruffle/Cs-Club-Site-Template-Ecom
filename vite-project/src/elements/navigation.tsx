/*

<nav>
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

*/

// import { useState } from 'react'
//import './App.css'
import './../styles.css'

function NavBar() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <nav>
            <ul>
            <li><a href="#">Home</a></li> {/* change from href to class*/}
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
