import styled from 'styled-components';

import { colors } from '../../styles/theme';
import { IItemList } from '../../utils/interfaces/ItemList';

const { gray3, primary_color } = colors;

export default {
    Content: styled.div`
        height: 549px;
        width: 90%;
        padding: 157px 0 0 298px;
        display: flex; 
        `,
    WrapperSteps: styled.div`
        border-left: 1px solid ${gray3};
        position: relative;
        `,
    WrapperList: styled.ul`
        position:absolute;
        top: 0;
        right: 57px;
    `,
    ItemList: styled.li<IItemList>`
        height: 88px;
        width: 125px;
        text-align: right;
        font-size: 14px;
        list-style-type: none;
        line-height: ${({ singleName }) => singleName && "37px"};
        font-weight: ${({state}) => state === "active" ? '600' : '400'};
    `, 
    Section: styled.div`
        height: 80vh;
        width: 80%;
        margin-left: 30px;
        background-color: ${primary_color};
    ` 
        
} 
