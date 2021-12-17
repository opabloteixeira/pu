import styled from 'styled-components';
import { IButton } from '../../../utils/interfaces';
import { colors } from '../../../styles/theme';


const {
    white,
    primary_color,
    light_purple,
    dark_purple,
    gray3,
    gray4
} = colors;



export default {
    Button: styled.button<IButton>`
        width: ${({ icon }) => icon ? '163px' : '139px'};
        color: ${({ icon }) => icon  ? primary_color : white};
        background-color: ${({ icon }) => icon  ? white : primary_color};
        
        background-color: ${({ border }) => border && white};
        
        color: ${({ disable }) => disable ? primary_color : white};

        background-color: ${({ disable }) => disable && gray3};

        background-color: ${({ border, disable }) => disable && border && white};
        
        height: 48px;
        border-radius: 24px; 
        transition: all  0.3s ease-out;
        border: none;
        cursor: pointer; 
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0 21px;
        
        border: ${({ border }) => border && `2px solid ${primary_color}`};
        border: ${({ disable }) => disable && `2px solid ${gray3}`};

        strong {
            color: ${({ icon }) => icon ? primary_color : white};
            color: ${({ border }) => border && primary_color};
            color: ${({ disable }) => disable && gray4};
        }
        
        &:hover {
            background-color:
            ${({ icon, disable }) => icon && !disable ? light_purple : !disable && dark_purple};
            strong {
                color: ${({ border, disable }) => border && !disable && white};
            }
        }
    `
}