import React from 'react'
import { Greed } from './Greed'

function CustomComponent(props: React.ComponentProps<typeof Greed>) {
  return (
      <div>
          CustomComponent
          {props.language}
      </div>
  )
}

export default CustomComponent