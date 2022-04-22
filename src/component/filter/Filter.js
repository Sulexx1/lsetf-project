import React from 'react'
import Styled from 'styled-components'

const filter = () => {
  return (
    <FiltHold>
        <FiltWrap>Copyright </FiltWrap>
    </FiltHold>
  )
}

export default filter

const FiltHold = Styled.div`
width: 100%;
height: 100px;
background: red;
display: flex;
justify-content: center;
`
const FiltWrap = Styled.div`

`