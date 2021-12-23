import S from './styles';

import { IconCheck } from '../../assets/svg';
import { IStepItem } from '../../utils/interfaces';
export const StepItem = ( { stepType }: IStepItem ) => (
        <S.Container
            stepType={stepType}
            > 
            {stepType === "active" && (
                <S.FieldSelectedItem />
            )} 

                <S.FieldBallItem stepType={stepType} > 
                    {stepType === "accessed"  && (
                        <IconCheck />
                    )}
                </S.FieldBallItem>  
        </S.Container>
    )