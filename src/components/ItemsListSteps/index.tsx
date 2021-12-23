import { IItemList } from '../../utils/interfaces';
import S from './styles';


export const ItemsListSteps = ({singleName, state, name}: IItemList) => {

    return (
        <S.ItemList
            singleName={singleName}
            state={state}
        >
            {name}
        </S.ItemList>
    )
}
    