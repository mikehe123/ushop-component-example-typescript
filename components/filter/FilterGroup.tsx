import Filter from './Filter'
import * as S from './S.FilterGroup'

const FilterGroup = () => {
  return (
    <S.Container>
      {/* <S.FilterG> */}
      <S.FilterGroupContainer>
        <S.Title>Filters</S.Title>
        <Filter filterName='Price' filterCategory={priceFilter} />
        <Filter filterName='Condition' filterCategory={conditionFilter} />
        <Filter filterName='Status' filterCategory={statusFilter} />
        <Filter filterName='Delivery' filterCategory={deliveryFilter} />
      </S.FilterGroupContainer>
      {/* <S.FilterG></S.FilterG>  */}
      {/* </S.FilterG> */}
      <S.SearchPagePlaceholder></S.SearchPagePlaceholder>
    </S.Container>
  )
}

// maybe have a range for price, others don't need
const priceFilter = [
  { attribute: 25, label: 'Under $25', checked: false },
  { attribute: 50, label: '$25 to $50', checked: false },
  { attribute: 75, label: '$50 to $75', checked: false },
  { attribute: 100, label: '$75 to $100', checked: false },
  { attribute: 100, label: '$100 and up', checked: false },
]

const conditionFilter = [
  { attribute: 'New', label: 'New', checked: false },
  { attribute: 'Like New', label: 'Like New', checked: false },
  { attribute: 'Good', label: 'Good', checked: false },
  { attribute: 'Fair', label: 'Fair', checked: false },
]

const statusFilter = [
  { attribute: 'Any', label: 'Any', checked: false },
  { attribute: 'Bid', label: 'Bid', checked: false },
  { attribute: 'Buy', label: 'Buy', checked: false },
]

const deliveryFilter = [
  { attribute: 'Campus Mail', label: 'Campus Mail', checked: false },
  {
    attribute: 'In-person Handoff',
    label: 'In-person Handoff',
    checked: false,
  },
  { attribute: 'Gleason Locker', label: 'Gleason Locker', checked: false },
]

export default FilterGroup
