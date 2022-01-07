import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Wrap>
            <a>
                <img src="/images/yalelo-logo.png" alt="" style={{
                    height: 89,
                    width: 89,
                    padding: 8,
                   
                }} />
            </a>
            <Menu>
            <a href="#" style={{
                color: 'white',
                backgroundColor: 'teal',
                fontFamily: 'Lucida Console',
                padding: 6,
                borderRadius: 16, 
                fontSize: 11,
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
                    fontSize: 11,
                    fontWeight: 200,          

                }}>Retails/Sales
                </a>
                 <a href="#" style={{
                    color: 'white',
                    backgroundColor: 'teal',
                    fontFamily: 'Lucida Console',
                    padding: 6, 
                    borderRadius: 16, 
                    fontSize: 11,
                    fontWeight: 200,        
                }}>Marketing
                </a>
            </Menu>
            <RightMenu>
                <a href="#"
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    fontFamily: 'Lucida Console',
                    padding: 6, 
                    borderRadius: 16, 
                    fontSize: 11,
                    fontWeight: 200,}}
                >Quick Reports
                </a>
                <a href="#"
                style={{
                    color: 'black',
                    backgroundColor: 'white',
                    fontFamily: 'Lucida Console',
                    padding: 6, 
                    borderRadius: 16, 
                    fontSize: 11,
                    fontWeight: 200,}}
                >Detailed Reports
                </a>
            </RightMenu>
            <SignupText>
                <a href='#' style={{
                    color: 'grey',
                    backgroundColor: 'white',
                    padding: 1,
                    borderRadius: 15,
                    flexDirection: 'column',
                }}>
                Login
                    </a>
            </SignupText>
            
        </Wrap>
    )
}


export default Header

const Menu = styled.div`
 display: flex;
 align-items: center;

 a {
     font-weight: 600;
     text-transform: uppercase;
     padding: 0 5px;
     flex-wrap: nowrap;
     margin-right: 5px;
 }
 @media (max-width: 768px) {
    flex-direction: column;
}
`
const Wrap = styled.div`
 padding-left: 11vh;
 margin-top: 2vh;
 margin-bottom: 3vh;
 border-radius: 16px;
 opacity: 0.78;
 @media (max-width: 768px) {
    flex-direction: column;
}
position: fixed;
min-height: 60px;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
`
const RightMenu = styled.div`
a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 7px;
    margin-right: 10px;
    flex-wrap: nowrap;
}
`
const SignupText = styled.div`
a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 7px;
    margin-right: 10px;
    flex-wrap: nowrap;
    right: 0;
}

`