import React from 'react'
import Card from '../Card/Card'
import Heropage from '../Heropage/Heropage'
import Filter from '../filter/Filter'

function Home() {
  return (
    <>
    <Heropage/> 
    <Card/>
    <Filter/>
    </>
  )
}

export default Home