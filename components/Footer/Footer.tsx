import React from 'react'
import Image from 'next/image'
import Styled from '@emotion/styled'

const FooterStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export default function Footer() {
  return (
   <FooterStyle>
    <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
   </FooterStyle>
  )
}
