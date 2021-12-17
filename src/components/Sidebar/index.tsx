import { useState } from 'react';
import S from './styles';
import {
    IconLogoDx,
    IconHamburger,
    IconClients,
    IconCombos,
    IconCustom,
    IconDashboard,
    IconCoupon,
    IconLoyalty,
    IconOrdersAvaliations,
    IconStoreAvaliations,
    IconProducts, 
    IconUsers,
    IconOrders,
    IconHome,
    IconMenu,
    IconPromotion,
    IconExit,
    IconPlus
} from '../../assets/svg'


import Woman from '../../assets/img/woman.jpg'

export const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen)
    return ( 
        <S.Sidebar menuOpen={menuOpen}> 
            <S.HeaderSideBar menuOpen={menuOpen}>
                <S.WrapLogo  menuOpen={menuOpen} >
                    <IconLogoDx  /> 
                </S.WrapLogo>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                    <IconHamburger  /> 
                </div>
            </S.HeaderSideBar>
                <S.ItemMenu menuOpen={menuOpen} active><IconHome /> <span>Início</span></S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconDashboard /> <span>Dashboard</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconClients /> <span>Clientes</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconUsers /> <span>Usuários</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconOrders /> <span>Pedidos</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconProducts /> <span>Produtos</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconMenu /> <span>Cardápios</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCombos /> <span>Combos</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}>
                    <div style={{marginLeft: '-4px'}}>
                        <IconPromotion  />
                    </div>
                    <span>Promoções</span>
                </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCustom /> <span>Customização</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}><IconLoyalty /><span>Fidelidade</span></S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCoupon /> <span>Cuponagem</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconOrdersAvaliations /> <span>Avaliações de Pedidos</span> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconStoreAvaliations /> <span>Avaliações de Lojas</span> </S.ItemMenu>


                <S.FooterSideBar menuOpen={menuOpen}>
              
                        <S.TopFooter menuOpen={menuOpen}>
                            <span>
                                <div>
                                    <img src={Woman} alt="imagem do usuário" />
                                </div>
                                <div className="texts">
                                    <strong>Eduarda Coelho</strong> 
                                    <h5>Customer Success</h5>
                                </div>
                            </span>   
                            <i>
                                <IconExit /> 
                            </i>
                        </S.TopFooter>
                        <S.BottomFooter menuOpen={menuOpen}>
                            <img src={Woman} alt="imagem do usuário" />
                            <img src={Woman} alt="imagem do usuário" />
                            <img src={Woman} alt="imagem do usuário" />
                            <img src={Woman} alt="imagem do usuário" />
                            <img src={Woman} alt="imagem do usuário" />
                            <img src={Woman} alt="imagem do usuário" />
                            <span> <IconPlus /> </span>
                        </S.BottomFooter>

               
                </S.FooterSideBar>

        </S.Sidebar> 
    )
} 