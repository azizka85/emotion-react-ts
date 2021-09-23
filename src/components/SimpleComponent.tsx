/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from "@emotion/css"

function SimpleComponent() {
  return (
    <div className={css({
      color: 'hotpink',
      textDecoration: 'underline'
    })}>
      Hello, I'm simple component
    </div>
  )
}

export default SimpleComponent
