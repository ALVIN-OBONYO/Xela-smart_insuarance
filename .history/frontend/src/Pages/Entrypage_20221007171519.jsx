import React, {useState, useRef} from 'react'
import "../Components/Navbar.css"
import { FaTimes, FaBars, FaInstagram, FaTwitter, FaFacebook, } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import { truncateAddress } from '../Services/TruncateAddress'
import Web3 from 'web3'
import { GetContractSymbol } from '../Services/Contract'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import PlanCard from "../Components/Cards"
import EmailIcon from "@mui/icons-material/Email"  
import { IconButton, InputAdornment } from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useNavigate} from 'react-router-dom'

const Entrypage = () => {
        const [navButton, setNavButton] = useState(true)
        const switchNavState = () => setNavButton(!navButton)
        const buttonLogout = useRef(null)
        const yourAddress = useRef()
        const buttonLogin = useRef(null)
        window.userAddress = null 
        const [error, setError] = useState("")
        const navigate = useNavigate()
         

        window.onload = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
            } else {
                alert("No ETH browser extension detected.")
            }
        }
         console.log(GetContractSymbol())
        async function LoginWithEth() {
    
            if (window.web3) {
                try {
                    const selectedAccount = await window.ethereum.request({
                        method: "eth_requestAccounts"
                    })
                    .then((accounts) => accounts[0])
                    .catch(() => {
                        throw Error("No account selected!")
                    })
        
                  window.userAddress = selectedAccount;
                  window.localStorage.setItem("userAddress", selectedAccount); 
                             
                showAddress()
                  
                }
                catch (error) {
                    console.error(error)
                }
                
            } else {
                alert("No ETH browser extension detected.");
            }
        }
        
        function showAddress() {
          if (!window.userAddress) {
            buttonLogin.current.classList.remove("btnlog")
            yourAddress.current.innerText = ""
            buttonLogout.current.classList.add("hidden") 
             return false
        }
        
        buttonLogin.current.classList.add("btnlog")
        yourAddress.current.innerText = `ETH Address: ${truncateAddress(window.userAddress)}`
        buttonLogout.current.classList.remove("hidden")
    } 

         function logout() {
            window.userAddress = null 
            window.localStorage.removeItem(buttonLogout)
            showAddress()           
           
}

        function login() {
            try {
                setError("")
                navigate("/policy")
            }
            catch {
                setError("Check if wallet address is connected")
            }
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
                         
            
            <Button variant="outlined" onClick={LoginWithEth}>Save ETH Address
                </Button>
                <button className="hidden text-blue-500 underline" onClick={login} ref={buttonLogin}>Login
                </button>
                <p id="userAddress" className="text-gray-600" ref={yourAddress}></p>
                <Button id="logoutButton" onClick={logout} className="hidden text-blue-500 underline" ref={buttonLogout}>Logout</Button>
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

            <Link to="/policy"><button id="buy-policy">Opt In</button></Link>
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