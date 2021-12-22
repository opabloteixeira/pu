
import S from './styles';

import { IconCheck } from '../../assets/svg';
export const StepItem = ( props: any ) => {


    const { active = false, accessed = false, disabled = false, } = props;

    console.log(props);
    return (
        <S.Container
            active={active}
            accessed={accessed}
            disabled={disabled}
        > 
            {active && (
                <S.FieldSelectedItem
                    active={active}
                    accessed={accessed}
                    disabled={disabled}
                />
            )} 
                
                <S.FieldBallItem accessed={accessed}> 
            {accessed && (
                    <IconCheck />
                    )}
                </S.FieldBallItem>  
        </S.Container>
    )
}