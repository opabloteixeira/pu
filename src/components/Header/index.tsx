import S from "./styles"
import { Button } from '../Basics/Button';
import { IconFullScreen } from '../../assets/svg'

export const Header = () => {
    return (
        <S.Container>
            <S.LeftHeader>
                <S.BreadCrumb>
                    Breadcrumb > Breadcrumb > Breadcrumb
                </S.BreadCrumb>
                <h1>
                    Cadastro de Lojas
                </h1>
            </S.LeftHeader>
            <S.RightHeader>
                <IconFullScreen />
                <Button icon> Importar lojas</Button>
            </S.RightHeader>
        </S.Container>
    )  
}  

