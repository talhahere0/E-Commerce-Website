import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Container = styled.div`
height: 60px;

`

const Wrapper = styled.div`
padding:10px 10px;
display:flex;
align-items:center;
justify-content: space-between;
`
const Left = styled.div`
display:flex;
flex:1;
align-items: center;
`
const Language = styled.span`
font-size:16px;
cursor: pointer;
`

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding:5px;

`

const Input = styled.input`
border:none;
`

const Center = styled.div`
flex:1;
`
const Logo = styled.h1`
font-weight: bold;
text-align:center;
`
const Right = styled.div`
flex:1;
display: flex ;
align-items: center;
justify-content:flex-end;
margin-right:15px;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`


const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center><Link style={{textDecoration:'none' ,color:'black'}} to="/"><Logo>LAMA.</Logo></Link></Center>
                <Right>
                   <Link style={{textDecoration:'none' ,color:'black'}} to="/Register"> <MenuItem>Register</MenuItem></Link>
                    <Link style={{textDecoration:'none' ,color:'black'}} to="/Login"><MenuItem>Sign In</MenuItem></Link>
                    <MenuItem>
                    <Badge badgeContent={2} color='primary'>
                      <Link style={{textDecoration:'none' ,color:'black'}} to="/Cart">  <ShoppingCartOutlined/></Link>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
