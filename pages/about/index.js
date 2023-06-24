import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Kelli_Profile from '../../public/.png'
import Kelli_Sailor from '../../public/.png'

export default function About () {
  const [hidden, setHidden] = React.useState(false)

  const showLong = () => {
    setHidden(true)
  }

  const showShort = () => {
    setHidden(false)
  }

  const showShortest = () => {
    setHidden(false);
  }

  return (
    <div className='flex flex-col justify-center'>
      <NextSeo
        title='- About'
        description=''
        canonical='h'
      />
        <section className='text-left xs:px-14 xs:py-14 px-28 py-20 xl:px-96 2xl:px-96 lg:px-72'>
          <article>
            <div className='w-full flex justify-center mb-6'>
              <Image src={_Profile} alt=' Profile' height='400' width='400' objectFit='cover' className='rounded-full shadow-circle' />
            </div>
          </article>
        </section>
    </div>
  )
}
