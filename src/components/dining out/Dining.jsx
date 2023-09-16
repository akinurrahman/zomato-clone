import React from 'react'
import Collections from './collections/Collections'
import Filter from '../filter/Filter'
import Banner from './banner/Banner'
import Menu from './menu/Menu'
const Dining = () => {
  return (
   <div >
    <Collections/>
    <Filter/>
    <Banner/>
    <Menu/>
   </div>
  )
}

export default Dining
