import styled from 'styled-components';
import { IItemList } from '../../utils/interfaces/ItemList';

export default {
    ItemList: styled.li<IItemList>`
        height: 88px;
        width: 125px;
        text-align: right;
        font-size: 14px;
        list-style-type: none;
        line-height: ${({ singleName }) => singleName && "37px"};
        font-weight: ${({state}) => state === "active" ? '600' : '400'};
    `, 

}