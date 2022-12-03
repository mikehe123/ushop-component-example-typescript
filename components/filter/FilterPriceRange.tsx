import Button from '@components/button/Button'
import { useState } from 'react'
import * as S from './S.FilterPriceRange'

const FilterPriceRange = () => {
  const handleInput = () => {}

  return (
    <S.PriceRangeContainer>
      <S.styledInput onChange={() => handleInput}></S.styledInput>
      to
      <S.styledInput onChange={() => handleInput}></S.styledInput>
      <Button></Button>
    </S.PriceRangeContainer>
  )
}

export default FilterPriceRange
