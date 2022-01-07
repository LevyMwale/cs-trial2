import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
        return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1 style={{
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: 34,
                    color: 'white',
                    backgroundColor: '#52BE80',
                    width: '100%',
                    margin: 8,
                    padding: 4,
                    borderRadius: 13,
                   
                }}>{title}</h1>
              
                <h4 style={{
                    fontFamily: 'Helvetica',
                    color: 'black',
                    margin: 12,
                    backgroundColor: 'silver',
                    alignContent: 'center',
                    margin: 12,
                    marginLeft: 23,
                    fontWeight: 200, 
                    padding: 3,
                    maxWidth: '100%'
                      
                
                }}>
            {description}
                </h4>
            </ItemText>
            </Fade>
           
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                   {leftBtnText} 
                </LeftButton>
                { rightBtnText && <RightButton>
                    {rightBtnText}
                </RightButton>}
                
            </ButtonGroup>
            </Fade>
          
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-image: ${props => `url("/images/${props.bgImage}")` }
   

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
            cursor: pointer;
    justify-content: center;
    align-items: center;
    
`
const ButtonGroup = styled.div`
    padding-top: 12vh;
    display: flex;
        @media (max-width: 768px) {
        flex-direction: column;
    }
    justify-content: center;
    align-items: center;
`
const LeftButton = styled.div`
    background-color: black;
    height: 40px;
    width 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    cursor: pointer;
    margin: 7px;
    font-weight: bold;
`
const RightButton = styled(LeftButton)`
    background: teal;
    color: black;
    font-weight: bold;
`
const DownArrow = styled.img`
    margin-top: 210px;
    height: 40px;
    overflow-x: hidden;
        animation: animateDown infinite 1.5s;
    justify-content: center;
    align-items: center;
    
`
const SignupText =styled.div`
cursor: pointer;
margin-left: 15px;


 
`