import dynamic from 'next/dynamic'
import React, { FunctionComponent } from 'react'

interface OwnProps {}

type Props = OwnProps

// ssr must be false
const Hello = dynamic(() => import('../components/hello'), {
  ssr: false,
})

const Page: FunctionComponent<Props> = (props) => {
  // do not use window or document under /page
  // eg do not, document.getElementById
  // and do not window.history .....

  //do this
  return <Hello />
}

export default Page
