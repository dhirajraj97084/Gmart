import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import Herosection from '../../component/herosection/Herosection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCart/ProductCard'
import Track from '../../component/track/Track'

function Home() {
  return (
    <Layout>
      <h1>
        <Herosection/>
        <Filter/>
        <ProductCard/>
        <Track/>
      </h1>
    </Layout>
  )
}

export default Home
