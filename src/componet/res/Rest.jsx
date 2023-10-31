import React, {useEffect, useState} from 'react'


function Rest() {
  return (
    <>
    <div className=" row ms-auto">
    <section className='pizza'>
      <Link to ="/pizza"> Pizza</Link>
    </section>

    <section className=' Onion'>
      <Link to ="/onion"> Onion</Link>
    </section>

    <section className=' salad'>
      <Link to ="/salad"> salad</Link>
    </section>
    </div>
    </>
  )
}

export default Rest