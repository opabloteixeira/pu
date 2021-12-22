
import S from './styles';
import { IconButton } from '../../../assets/svg'

export const Button = ({ icon, border, disable, children }: any) => (
    <S.Button icon={icon} border={border} disable={disable}>

        { icon && <IconButton />}
        <strong>
            {children}
        </strong>
    </S.Button> 
)


