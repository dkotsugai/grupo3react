import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>


        <div className={styles.grid}>
          
          <a className={styles.card}>
            <h2>Encontre o erro  &rarr;</h2>
         <p>Existe um erro neste arquivo. Veja que este bloco aparece diferente na tela.</p> 
          </a>



          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Crie um repositório &rarr;</h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Trabalho em grupo &rarr;</h2>
            <p>
              Ajude para que todos do grupo participe, envolva-se.
            </p>
          </a>

        </div>
      </main>

      <Footer/>
     
      
    </div>
  )
}

export default Home
