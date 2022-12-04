import { useState } from 'react'
import * as S from './S.Filter'
import ArrowLeft from '@asset/icons/listing-shift-left.svg'
// import Checkbox from './Checkbox'
import Checkbox from '@components/checkbox/Checkbox'
import Button from '@components/button/Button'

interface FilterProps {
  filterName: String
  filterCategory: {
    attribute: number | string
    label: string
    checked: boolean
  }[]
  children?: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  checkbox: 'click' | 'hover' | 'unclicked'
}

const Filter: React.FC<FilterProps> = ({
  filterName,
  filterCategory,
  children,
  onClick,
  checkbox,
}) => {
  const [filtersState, setFiltersState] = useState(filterCategory)
  const [toggle, setToggle] = useState(true)

  const handleCheck = (index: number) => {
    filtersState[index].checked = !filtersState[index].checked
    setFiltersState([...filtersState])
  }

  const changeBackground = (e: {
    target: { style: { background: string } }
  }) => {
    e.target.style.background = 'red'
  }

  return (
    <S.Filter>
      <S.Line />
      <S.FilterNameContainer>
        <S.FilterName>{filterName}</S.FilterName>
        <S.ToggleLine onClick={() => setToggle((prevState) => !prevState)}>
          —
        </S.ToggleLine>
      </S.FilterNameContainer>
      {toggle &&
        filtersState.map(({ checked, label }, index) => (
          <S.CheckboxContainer>
            <Checkbox
              key={index + label}
              toggleCheck={checked}
              onClick={() => handleCheck(index)}
            />

            {filtersState[index].label}
          </S.CheckboxContainer>
        ))}
      {children}
    </S.Filter>
  )
}

export default Filter
