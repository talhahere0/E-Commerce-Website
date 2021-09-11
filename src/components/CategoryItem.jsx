import React from 'react'
import styled from 'styled-components'
import{Link} from 'react-router-dom'

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`

const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left:0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`
const Title = styled.h1`
color:white;
margin-bottom:20px;
`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
font-weight: 600;
`

const CategoryItem = ({item}) => {
    console.log(item)
    return (
       <Container>
           <Image src={item.img} alt="" />
           <Info>
               <Title>{item.title}</Title>
               <Link to="/ProductList"><Button>BUY NOW</Button></Link>
           </Info>
       </Container>
    )
}

export default CategoryItem
