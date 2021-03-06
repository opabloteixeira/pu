import styled from 'styled-components';

import { colors } from '../../styles/theme';

const { primary_color, white } = colors;

export default {
    Container: styled.div`
        height: 105px;
        width: 100%;
        background-color: ${primary_color}; 
        position: fixed;
        z-index: 0;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 0 140px;
        `,
    LeftHeader: styled.div`
        display: flex;
        justify-content: left;
        align-items: center;
        flex-direction: column;

        `,
    TitleHeader: styled.h1`
        color: ${white};
        margin-left: 15px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
    `,
    RightHeader: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 250px;
    `,
    BreadCrumb: styled.small`
        color: ${white};
    `,
    WrapperFullscreen: styled.div`
        cursor: pointer;
    `,
}
    
    
    