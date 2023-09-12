import Styled, { styled } from "styled-components";

export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.21%);
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const TodoList = styled.div`
background-color:white;
padding:30px 20px;
border-radius:5px;
`

export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
height:40px;
margin-right: 10px;
`
export const Button = styled.button`
background-color: #8052ec;
border-radius: 5px;
border: none;
color: white;
font-weight:900;
font-size: 17;
line-height: 2px;
height:40px;
width: 130px;
`