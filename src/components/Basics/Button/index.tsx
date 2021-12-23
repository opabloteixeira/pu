
import S from './styles';
import { IconButton } from '../../../assets/svg'
import { IButton } from '../../../utils/interfaces';

export const Button = ({ icon, border, disable, children }: IButton) => (
    <S.Button icon={icon} border={border} disable={disable}>

        { icon && <IconButton />}
        <S.TextButton icon={icon} border={border} disable={disable}>
            {children}
        </S.TextButton>
    </S.Button> 
)


