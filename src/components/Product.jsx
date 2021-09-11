import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position:absolute;
left:0;
top:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items:center;
justify-content: center;
transition:all 0.5s ease;
cursor:pointer;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:300px;
height:350px;
display:flex;
align-items:center;
justify-content: center;
background-color: #f5fbfd;
position:relative;

&:hover ${Info}{
    opacity: 1;

}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius: 50%;
background-color: white;
position:absolute;
`
const Image = styled.img`
z-index: 2;
height:75%;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display: flex;
align-items:center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`

const Product = ({item}) => {
    return (
        <Container>

            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                   <Link style={{textDecoration:'none' ,color:'black'}} to="/Product"> <ShoppingCartOutlined/></Link>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
            
        </Container>
    )
}

export default Product
