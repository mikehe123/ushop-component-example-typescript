import styled from 'styled-components'
import NImage from 'next/image'

export const Container = styled.div`
  min-width: 37px;
  min-height: 37px;

  display: flex;
  justify-content: center;
  user-select: none;
`

export const Image = styled(NImage)`
  background: none;
`
