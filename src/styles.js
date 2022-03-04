import styled from 'styled-components'

// Background
export const Container = styled.div`
display: flex;
position: relative;
flex-direction:column;
align-items: center;
margin: 0 auto;
width: 414px;
height: 100%;
background-repeat: repeat;


img {
    margin-top:50px;
}

textarea {
    width: 342px;
    height: 138px;
    margin-top: 50px;
    margin-bottom: 25px;
    padding: 5px;
    font-size: 20px;
    resize: none;
}
`

export const List = styled.ul`
    
    li {
    background: rgba(255, 255, 255, 0.14);
    width: 342px;
    height: 68px;
    margin-top: 15px;
    list-style-type: none;
    border-radius: 10px;
    color: white;
    padding: 5px;
    padding-left: 10px;
    }

`



// ? = faço pergunta if 
// : = else
export const Button = styled.button`
background: ${props => props.is0n ? '#000000' : 'gray'};
border-radius: 10px;  
width: 342px;
height: 64px;
color: ${props => props.is0n ? 'white' : '#000000'};;
border: none;
font-size: 17px;
cursor: pointer;
`