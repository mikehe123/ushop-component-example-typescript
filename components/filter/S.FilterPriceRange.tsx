import styled from 'styled-components'

export const PriceRangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;
  justify-items: center;
`

export const CheckboxContainer = styled.div`
  font-family: lato;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 200px;
  height: 35px;
  /* margin: 8px; */
  padding-left: 8px;
`

export const styledInput = styled.input`
  border: none; /* <-- This thing here */
  border: solid 1px #c5c5c5;
  margin: 5px;
  border-radius: 5px;
  width: 65px;
  height: 37.58px;
  font-family: lato;
  font-weight: 400;
  font-size: 16px;
`
