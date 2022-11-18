import { useState } from 'react'
import * as S from './S.Filter'

interface FilterProps {
  filterName: String
  filterCategory: {
    attribute: number | string
    label: string
    checked: boolean
  }[]
}

const Filter: React.FC<FilterProps> = ({ filterName, filterCategory }) => {
  const [filtersState, setFiltersState] = useState(filterCategory)
  const [toggle, setToggle] = useState(true)

  const handleCheck = (index: number) => {
    filtersState[index].checked = !filtersState[index].checked
    setFiltersState([...filtersState])
  }

  const displayFilter = () => {
    {
    }
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
            {/* <input type='checkbox' /> */}

            <S.styledInput
              key={index + label}
              type='checkbox'
              defaultChecked={filtersState[index].checked}
              onClick={() => {
                handleCheck(index)
              }}
            />
            {filtersState[index].label}
          </S.CheckboxContainer>
        ))}
    </S.Filter>
  )
}

export default Filter
