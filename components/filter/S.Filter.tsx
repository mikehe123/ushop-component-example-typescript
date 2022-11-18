import styled from 'styled-components'

export const Filter = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`
export const FilterNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;
  justify-items: center;
`

export const FilterName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-family: lato;
  font-weight: 400;
  font-size: 16px;

  width: 200px;
  height: 35px;
  /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; */
  padding-left: 8px;
`

export const ToggleLine = styled.h1`
  /* display: flex;
  align-items: center;
  justify-content: right; */
  font-family: lato;
  /* font-weight: 400; */
  font-size: 230x;
  /* display: inline-block; */
`
export const Line = styled.hr`
  color: #26241e;
  background: #26241e;
  border: none;
  height: 1px;
  width: 200px;
  /* flex-direction: column; */

  display: inline-block;
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
  outline: 2px solid #95ce97;
  /* width: scale();
  height: 25px; */
  outline-offset: -2.2px;
  transform: scale(1.5);
  margin-right: 8px;
  /* display: inline-blo95CE97ine; */
  /* float: right; */
`
