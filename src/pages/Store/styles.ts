import styled from 'styled-components';

import { colors } from '../../styles/theme';

const { water_green, gray3, primary_color } = colors;

export default {
    Content: styled.div<any>`
        height: 55vh;
        width: 90%;
        padding: 124px 0 0 157px;
        /* background-color: #eee; */
        display: flex; 
        div {
            border-left: 1px solid ${gray3};
        }

        `,
        Section: styled.div`
            height: 80vh;
            width: 80%;
            margin-left: 30px;
            background-color: ${primary_color};
        ` 
        
} 
