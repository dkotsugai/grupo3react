import React from 'react'
import Styled from '@emotion/styled'


const HeaderStyle = Styled.div`
  color: teal;
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  p{
    color: #575b61;
    font-size: 2,5rem;
  }
`

export default function Header() {
  return ( 
    <HeaderStyle>
      
        <h1 >
          Bem vindo ao projeto em grupo!
        </h1>

        <p >
          Agora analisem o arquivo index.tsx na pasta pages
        </p>

    </HeaderStyle>

  )
}