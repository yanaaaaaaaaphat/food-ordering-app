import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/Pizzalist'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaPlz</title>
        <meta name="description" content="Best pizzaria in town!" />
        <link rel="icon" href="/img/1.png" />
      </Head>
     <Featured/>
     <PizzaList/>
    </div>
  )
}
