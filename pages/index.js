import Head from 'next/head'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Results from '../components/results/Results'
import request from '../utilis/request'


export default function Home({ results }) {
  // console.log(props)
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
    const genre = context.query.genre;

    const reques = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`).then( res => res.json());

    return {
      props: {
        results: reques.results
      }
    }
}
