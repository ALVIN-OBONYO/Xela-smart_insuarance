import React, {useState, useRef} from 'react'
import "../Components/Navbar.css"
import { FaTimes, FaBars, FaInstagram, FaTwitter, FaLinkedinIn, FaFacebook, } from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import { Link} from 'react-router-dom'
import { loginWithEth } from '../Services/LoginWithEth'
import { truncateAddress } from '../Services/TruncateAddress'
import Web3 from 'web3'
import { getContractSymbol } from '../Services/Contract'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import FormGroup from "@mui/material/FormGroup"
import PlanCard from "../Components/Cards"
const Entrypage = () => {
        const [navButton, setNavButton] = useState(false)
        const [policy, setPolicy] = useState("")
        const switchNavState = () => setNavButton(!navButton)
        const buttonLogout = useRef(null)
        const yourAddress = useRef()
        window.userAddress = null 

         

        window.onload = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
            } else {
                alert("No ETH browser extension detected.")
            }
        }
        
        function showAddress() {
          if (!window.userAddress) {
            yourAddress.current.innerText = ""
            buttonLogout.current.classList.add("hidden") 
             return false
        }

        yourAddress.innerText = `ETH Address: ${truncateAddress(window.userAddress)}`
        buttonLogout.classList.remove("hidden")
    } 

         function logout() {
            window.userAddress = null 
            window.localStorage.removeItem(buttonLogout)
            showAddress()
}

    return (
        <>
        <header>
        <nav id="my-nav">
        <h1 className='brand'><span className='X'>X</span>ela Smart Insurance</h1>
        <div className='toogleNav' onClick={switchNavState} >{navButton ?  
        <div id="bars">

            <FaBars size="2.5em"/>
            </div> : 
            <div className = "navflex">
            <div id="times">
                <FaTimes />
                </div>
            <h4>About</h4>
            <h4>Products</h4>
            <h4>Pricing</h4>
            <h4>Resources</h4> 
            </div>
      
}
        </div>
        <div className='nav-section'>
            <h4>About</h4>
            <h4>Products</h4>
            <h4>Pricing</h4>
            <h4>Resources</h4>
        </div>
        </nav>
        <section className="top-descr" id='top'>
            <h1 id="top-h3">Car Insurance On Blockchain</h1>
            <p id="top-pg">Choose our insurance company that is sure to uphoald the contract through our blockchain smart contracts.</p>
            <div id="policy-sec">
                {/* <FormGroup row >
               <TextField
                variant="outlined"
                placeholder='Enter your policy number'
                sx={{
                    borderRadius: 0,
                    padding: 0                   
                }}
                />
                <Button variant="contained" sx={{
                    borderRadius: 0,
                    padding: "6px"
                }}>Verify</Button>
                    </FormGroup> */}
            
            <Button variant="outlined" onClick={loginWithEth}>Login & Save ETH Address
                </Button>
                <p id="userAddress" className="text-gray-600" ref={yourAddress}></p>
                <button id="logoutButton" onClick={logout} className="hidden text-blue-500 underline" ref={buttonLogout}>Logout</button>
                           </div>
        </section>
        </header>
        <div className='about-descr' id="descr">
            <h2>What We Offer</h2>
            <p>
            Our Motor insurance cover protects the insured against financial loss in the event that the motor vehicle is involved in an accident, burnt or stolen.</p>
            
            <p>
            

<b>Our Pricing Plans</b> 
</p>
<PlanCard /> 
            <Link to="/policy"><button id="buy-policy" onClick={getContractSymbol}>Opt In</button></Link>
        </div>
        <div id="land-footer">
            <div>
            <h2>Have a Question?</h2>
             <h3><FiPhoneCall /> <span>+254 745378503</span></h3>
             <h2>Company</h2>
             <h3>Xela Smart Insurance</h3>
             <div id="social-icons">
               <FaFacebook size="2em"/>
               <FaInstagram size="2em"/>
               <FaTwitter size="2em"/>
               <FaLinkedinIn size="2em"/>
             </div>
             <div>
                <Link to="/report/1">Report</Link>
                <h2>General Information</h2>
                <h4>Xela Insurance Centre,</h4>
                <h4>Kinhs Street, Nairobi</h4>
                <h4>P.O Box 7489 - 00200 GPO, Nairobi,</h4>
                <h4>Kenya</h4>
                <h4>xelasmart@xelakenya.com</h4>
                <h2>Newsletter</h2>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
             </div>
            </div>
        </div>
        </>
    )
}

export default Entrypage