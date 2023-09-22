import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import mycontext from '../../context/data/mycontext'

function Home() {
    const context=useContext(mycontext);
    const {}=context;
  return (
    <Layout>
      home
      <h1></h1>
    </Layout>
  )
}

export default Home
