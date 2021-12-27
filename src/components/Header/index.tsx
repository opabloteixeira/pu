import S from "./styles"
import { Button } from '../Basics/Button';
import { IconFullScreen, IconArowRight } from '../../assets/svg'

export const Header = () => {

    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    return (
        <S.Container>
            <S.LeftHeader>
                <S.TitleHeader>
                <S.BreadCrumb>
                    Clientes  <IconArowRight /> Cliente A  <IconArowRight />  Adicionar lojas
                </S.BreadCrumb>
                    Adicionar lojas
                </S.TitleHeader>
            </S.LeftHeader>
            <S.RightHeader>
                <S.WrapperFullscreen  onClick={  handleFullScreen}>
                    <IconFullScreen />
                </S.WrapperFullscreen>
                <Button icon> Importar lojas</Button>
            </S.RightHeader>
        </S.Container>
    )  
}  

