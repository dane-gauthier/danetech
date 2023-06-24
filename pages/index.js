import { NextSeo } from 'next-seo'
import MainContent from '../components/MainContent'

export default function Home () {
  return (
    <div>
      <NextSeo
        title=''
        description=''
        canonical=''
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]}
      />
      <MainContent />
    </div>
  )
}
