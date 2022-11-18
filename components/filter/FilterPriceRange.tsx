import { useState } from 'react'
// import * as S from './S.Filter'

interface FilterPriceRangeProps {
  filterName: String
  filterCategory: {
    attribute: number | string
    label: string
    checked: boolean
  }[]
}

const FilterPriceRange: React.FC<FilterPriceRangeProps> = ({
  filterName,
  filterCategory,
}) => {
  return <p>dsada</p>
}

export default FilterPriceRange
