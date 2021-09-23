/** @jsx jsx */
import { jsx } from '@emotion/react'

function CssPropComponent() {
  return (
    <div css={{
      color: 'hotpink',
      textDecoration: 'underline'
    }}>
      Hello, I'm css prop component
    </div>
  )
}

export default CssPropComponent
