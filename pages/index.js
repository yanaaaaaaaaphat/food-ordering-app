import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/Pizzalist'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaPlz</title>
        <meta name="description" content="Best pizzaria in town!" />
        <link rel="icon" href="/img/1.png" />
      </Head>
     <Featured/>
     <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    }
  }
}
