import React, {useState, useRef, useEffect} from 'react'
import "../Components/Navbar.css"
import { FaTimes, FaBars, FaInstagram, FaTwitter, FaFacebook, } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import { LoginWithEth, getCurrentWallet } from '../Services/LoginWithEth'
import { truncateAddress } from '../Services/TruncateAddress'
import Web3 from 'web3'
import { getContractSymbol } from '../Services/Contract'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import PlanCard from "../Components/Cards"
import EmailIcon from "@mui/icons-material/Email"  
import { IconButton, InputAdornment } from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useAuth } from '../Services/showAddress'
const Entrypage = () => {
        const [navButton, setNavButton] = useState(false)
        const [policy, setPolicy] = useState("")
        const switchNavState = () => setNavButton(!navButton)
        const buttonLogout = useRef(null)
        const yourAddress = useRef()
        const {showAddress} = useAuth()
        window.userAddress = null 

         

        window.onload = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
            } else {
                alert("No ETH browser extension detected.")
            }
        }
        
    //     function showAddress() {
    //       if (!window.userAddress) {
    //         yourAddress.current.innerText = ""
    //         buttonLogout.current.classList.add("hidden") 
    //          return false
    //     }

    //     yourAddress.current.innerText = `ETH Address: ${truncateAddress(window.userAddress)}`
    //     buttonLogout.classList.remove("hidden")
    // } 

         function logout() {
            window.userAddress = null 
            window.localStorage.removeItem(buttonLogout)
            showAddress(yourAddress.current.innerText, buttonLogout.current.classList
                
                )
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
            
            <Button variant="outlined" onClick={LoginWithEth}>Login & Save ETH Address
                </Button>
                <p id="userAddress" className="text-gray-600" ref={yourAddress}></p>
                <button id="logoutButton" onClick={logout} className="hidden text-blue-500 underline" ref={buttonLogout}>Logout</button>
                           </div>
        </section>
        </header>
        <div className='about-descr' id="descr">
            <h2>What We Offer</h2>
            <p>
            Our Motor insurance cover protects the insured against financial loss in the event that the motor vehicle is involved in an accident, burnt or stolen. We use blockchain technology to ensure there is trust with our customers.</p>
            </div>
     <React.Fragment> 
              <p>                         
<b>Our Pricing Plans</b> 
</p>
<PlanCard /> 

            <Link to="/policy"><button id="buy-policy" onClick={getContractSymbol}>Opt In</button></Link>
            </React.Fragment>    
        <div id="land-footer">
            <div className="news-mail">
                <h2>Subscribe to Newsletter</h2>
               
                     <TextField 
                       variant="standard" 
                       id='input-with-icon-textfield'
                       InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="end" color='primary'>
                                    <EmailIcon />
                                </IconButton>
                                
                            </InputAdornment>
                        )
                       }}
                      
                       />
                        <Button>Subscribe</Button>

                
            </div>
            <div className="footer-service">
            <div>
                <h2>Xela Insurance Company</h2>
                <p>Invest in your safety with smart insurance</p>
                <h4>P.O Box 7489 - 00200 GPO, Nairobi,</h4>
            </div>
            <div className='footer-sect'>
                <h2>Services</h2>
                <ul className='sect-bottom'>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Features</li>
                <li>Blog</li>
                </ul>
            </div>
            <div className='footer-sect'>
                <h2>Resources</h2>
                <ul className="sect-bottom">
                <li>Developer</li>
                <li>Integration</li>
                <li>Pricing</li>
                <li>Reporting</li>
                </ul>
            </div>
            <div className='footer-sect'>
                <h2>Contact</h2>
                <ul className='sect-bottom'>
                <li><EmailIcon />   xelasmart@xela.co.ke</li>
                <li><AddIcCallIcon />   +254 745378503</li>
                <li>
                 <div id="social-icons">
                  <FaFacebook size="1.2em"/>
                  <FaInstagram size="1.2em"/>
                  <FaTwitter size="1.2em"/>
                  
             </div>
                </li>
               
                </ul>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default Entrypage