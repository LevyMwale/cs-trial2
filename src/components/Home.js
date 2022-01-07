import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
           <Section
              title="Customer Service and Planning"
              description="Production Planning, Order Management, Inventory"
              backgroundImg="cs2.jpg"
              leftBtnText="Customer Service"
              rightBtnText="Planning"
           />
           <Section 
           title="DISTRIBUTION"
           description="Stock Delivery, Detrack, Primary Distribution, Secondary Distribution"
           backgroundImg="ds.jpg"
           leftBtnText="Primary Distribution"
           rightBtnText="Secondary Distribution"
           />
           <Section 
           title="WAREHOUSING"
           description="Inventory Management, Stock Picking"
           backgroundImg="warehouse.jpg"
           leftBtnText="Fresh Inventory"
           rightBtnText="Frozen Inventory"
           />
           <Section 
           title="QUALITY"
           description="Stock Assessment, Returns Approvals, Disposal Approvals"
           backgroundImg="Yalelo-Zambia.jpg"
           leftBtnText="Assessments"
          
           />
           
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;`
 