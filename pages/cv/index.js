import { NextSeo } from 'next-seo'
import JobItem from '../../components/JobItem'
import { jobs } from '../api/jobs'

export default function CV () {
  return (
    <div className='justify-center flex flex-row'>
      <NextSeo
        title=''
        description=''
        canonical=''
      />
      <div className='flex flex-row xs:m-4 sm:m-2 md:m-cvMd lg:m-cvLg lg:p-cv xl:m-cvXL xl:p-6 2xl:m-cv2XL 2xl:py-6'>
        <section className='2xl:p-cv'>
          <h1 className='text-4xl xs:text-lg xs:font-bold text-indigo-600 dark:text-indigo-200'>experience</h1>
          {jobs.map(job => (
            <JobItem
              key={job.company}
              position={job.position}
              company={job.company}
              duration={job.duration}
              duties={job.duties}
            />
          ))}
        </section>
        <section>
        </section>
      </div>
    </div>
  )
}
