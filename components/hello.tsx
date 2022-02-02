import React, { FunctionComponent } from 'react'

interface OwnProps {}

type Props = OwnProps

const Hello: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h1>x:{window.screenX}</h1>
      <h1>y:{window.screenY}</h1>
    </div>
  )
}

export default Hello
