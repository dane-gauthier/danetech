import { NextSeo } from 'next-seo'
import ContactForm from '../../components/ContactForm'

export default function Contact () {
  return (
    <div className='justify-center flex flex-row'>
      <NextSeo
        title=''
        description=''
        canonical=''
      />
      <div className='flex flex-row p-4'>
        <section className=''>
          <h1 className='text-indigo-500 dark:text-indigo-200 text-2xl py-4 '>send me a line</h1>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
