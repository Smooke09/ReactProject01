import React from 'react';
import Image from './img/people.svg'


import { Button, Container, List } from './styles'


function App() {
  // estados =>  variavel, que toda vez que ela sofre alteraçao o react recarrega a pagina! 
  // ESTADP => VARIAVEL, SO QUE, ESSA VARIAVEL VAI PERMITIR QUE EU ATUALIZE OS ITENS NA TELA

  // ESTADO do React
  const [comment, setcomment] = React.useState()
  const [allComment, setTodayComment] = React.useState([])


  function typedNoTextArea(eventArea) {
    setcomment(eventArea.target.value)
  }

  function clickButton() {
    const allPreviousComments = [...allComment, comment]

    setTodayComment(allPreviousComments)
  }

  return (
    <Container>
      <img src={Image} alt="pessoas" />
      <textarea onChange={typedNoTextArea}></textarea>
      <Button is0n={comment} onClick={clickButton}>Comentar</Button>
      <List>
        {allComment.map((cmt, index) => (
          <li key={index} >{cmt}</li>
        ))}
      </List>
    </Container>
  );
}

export default App;
