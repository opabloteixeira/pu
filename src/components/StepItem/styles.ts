import styled from 'styled-components';

import { IStepItem } from '../../utils/interfaces'
import { colors } from '../../styles/theme';

const { water_green, gray3, white, light_green } = colors;


export default {
    Container: styled.div<IStepItem>` 
        height: 40px;
        width: 40px;
        background-color: ${({disabled, accessed}) => disabled ? gray3 : accessed ? light_green : water_green };
        display: flex;
        border-radius: 50%;  
        margin-bottom: 48px; 
        margin-left: -20px;
        position: relative;
        justify-content: center; 
        align-items: center;
        cursor: pointer;
    `,
    FieldSelectedItem: styled.div<any>`    
        height: 1px;
        width: 31px;
        background-color: ${gray3};
        position: absolute;
        right: -31px;
        top: 20px;
    `,
    FieldBallItem: styled.span<IStepItem>`
            margin: 0 auto;
            height: ${({accessed}) => accessed ? '23px' : '15px'};
            width: ${({accessed}) => accessed ? '23px' : '15px'};;
            border-radius: 50%;
            background-color: ${ white };
            display: flex;
            align-items: center;
            justify-content: center;
    `
    
}