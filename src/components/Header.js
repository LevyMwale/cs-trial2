import React, { useState } from 'react'
import styled from 'styled-components';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Wrap horizontal
        >
            <a>
                <img src="/images/yalelo-logo.png" alt="" style={{
                    height: 60,
                    width: 60,
                    padding: 1,
                    margin: -3,
                   
                   
                }} />
            </a>
            <Fade bottom>

            <Menu>
            <a href="#" style={{
                color: 'white',
                backgroundColor: 'teal',
                fontFamily: 'Lucida Console',
                padding: 6,
                borderRadius: 16, 
                fontSize: 10,
                fontWeight: 200,
                justifyContent:'space-around'    
            }}>Production
                </a>
                <a href="#" style={{
                    color: 'white',
                    backgroundColor: 'teal',
                    fontFamily: 'Lucida Console',
                    padding: 6, 
                    borderRadius: 16,
                    fontSize: 10,
                    fontWeight: 200,          

                }}>Retails/Sales
                </a>
                 <a href="#" style={{
                    color: 'white',
                    backgroundColor: 'teal',
                    fontFamily: 'Lucida Console',
                    padding: 6, 
                    borderRadius: 16, 
                    fontSize: 10,
                    fontWeight: 200,        
                }}>Marketing
                </a>
            </Menu>
            </Fade>
            
            <RightMenu>
                <a href="http//google.com"
                  style={{
                    color: 'white',
                    backgroundColor: 'green',
                    fontFamily: 'Lucida Console',
                    padding: 9, 
                    borderRadius: 12, 
                    fontSize: 10,
                    fontWeight: 200,
                    marginRight: 15,
                }}
                >Quick Reports
                </a>
                <a href="#"
                style={{
                    color: 'white',
                    backgroundColor: 'green',
                    fontFamily: 'Lucida Console',
                    padding: 9, 
                    borderRadius: 12, 
                    fontSize: 10,
                    fontWeight: 200,
                marginRight: 23,
                }}
                >Detailed Reports
                </a>
                <SubMenu>
                    <CustomMenu onClick={()=>setBurgerStatus(true)}/>
                </SubMenu>
                
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseBtn onClick={()=>setBurgerStatus(false)}/>
                <li><a href='#'>Existing Product Types</a></li>
                <li><a href='#'>Team Leads</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>KYC</a></li>
                <li><a href='#'>Harvest</a></li>
                <li><a href='#'>Engineering</a></li>
                <li><a href='#'>Processes</a></li>
            </BurgerNav>

            
            
        </Wrap>
    )
}


export default Header

const Menu = styled.div`
 display: flex;
 align-items: center;
 margin-left: 9px;
 padding: 4px;
 a {
     font-weight: 600;
     text-transform: uppercase;
     padding: 0 5px;
     flex-wrap: nowrap;
     margin-right: 5px;
 }

`
const Wrap = styled.div`
 padding-left: 11vh;
 top: 3vh;
 margin-bottom: 12vh;
 border-radius: 16px;
 opacity: 0.78;
 justify-content: space-between;
 @media (max-width: 768px) {
    flex-direction: column;
}
position: fixed;
min-height: 60px;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
z-index: 1;
`
const RightMenu = styled.div`
display: flex;
a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 7px;
    margin-right: 10px;
    flex-wrap: nowrap;
}
@media (max-width: 800px) {
    flex-direction: none;
}
position: fixed;
top: 9;
right: 0;

`
const CustomMenu = styled(DehazeIcon)`
margin-right: 19px;
cursor: pointer;

`
const SubMenu = styled.div`
display: flex;
justify-content: flex-end;

`
const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background-color: white;
   z-index: 18;
   list-style: none;
   padding: 20px;
   display: flex;
   text-align: start;
   flex-direction: column;
   margin: 12px;
   transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
   li {
       padding: 10px;
       border-bottom: 1px solid rgba(0, 0, 0, .2);
   }
   border-radius: 12px;
  
`
const CloseBtn = styled(CloseIcon)`
   margin-left: 165px;
   margin-bottom: 20px;
   cursor: pointer;
`
