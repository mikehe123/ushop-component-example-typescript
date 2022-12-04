import * as S from './S.Checkbox'
import checked from '@asset/icons/checked.svg'
import unChecked from '@asset/icons/uncheckedbox.svg'

interface CheckboxProps {
  toggleCheck: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ toggleCheck, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      {toggleCheck ? (
        <S.Image src={checked} alt='checked' />
      ) : (
        <S.Image src={unChecked} alt='unChecked' />
      )}
    </S.Container>
  )
}

export default Checkbox
