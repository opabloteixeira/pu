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

    const sidebarData = [
        { 
            icon: <IconHome />,
            status: false,
            title: 'Início',
        },        
        { 
            icon: <IconDashboard />,
            status: true,
            title: 'Dashboard',
        },
        { 
            icon: <IconClients />,
            status: false,
            title: 'Clientes',
        },
        { 
            icon: <IconUsers />,
            status: false,
            title: 'Usuários',
        },
        { 
            icon: <IconOrders/>,
            status: false,
            title: 'Pedidos',
        },
        { 
            icon: <IconProducts/>,
            status: false,
            title: 'Produtos',
        },
        { 
            icon: <IconMenu/>,
            status: false,
            title: 'Cardápios',
        },
        { 
            icon: <IconCombos/>,
            status: false,
            title: 'Combos',
        },
        { 
            icon: <IconPromotion/>,
            status: false,
            title: 'Promoções',
        },
        { 
            icon: <IconCustom/>,
            status: false,
            title: 'Customização',
        },
        { 
            icon: <IconLoyalty/>,
            status: false,
            title: 'Fidelidade',
        },
        { 
            icon: <IconCoupon/>,
            status: false,
            title: 'Cuponagem',
        },
        { 
            icon: <IconOrdersAvaliations/>,
            status: false,
            title: 'Avaliações de Pedidos',
        },
        { 
            icon: <IconStoreAvaliations/>,
            status: false,
            title: 'Avaliações de Lojas',
        },

    ]

    return ( 
        <S.Sidebar menuOpen={menuOpen}> 
            <S.HeaderSideBar menuOpen={menuOpen}>
                <S.WrapLogo  menuOpen={menuOpen} >
                    <IconLogoDx  /> 
                </S.WrapLogo>
                <S.WrapperIconHamburger onClick={() => setMenuOpen(!menuOpen)}>
                    <IconHamburger  /> 
                </S.WrapperIconHamburger>
            </S.HeaderSideBar>
                {
                    sidebarData.map(item => (
                        <S.ItemMenu menuOpen={menuOpen} active={item.status}> {item.icon} <S.TitleItemMenu menuOpen={menuOpen}>{ item.title }</S.TitleItemMenu></S.ItemMenu>
                    ))
                }
                {/* <S.ItemMenu menuOpen={menuOpen} active><IconHome /> <S.TitleItemMenu menuOpen={menuOpen}>Início</S.TitleItemMenu></S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconDashboard /> <S.TitleItemMenu menuOpen={menuOpen}>Dashboard</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconClients /> <S.TitleItemMenu menuOpen={menuOpen}>Clientes</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconUsers /> <S.TitleItemMenu menuOpen={menuOpen}>Usuários</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconOrders /> <S.TitleItemMenu menuOpen={menuOpen}>Pedidos</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconProducts /> <S.TitleItemMenu menuOpen={menuOpen}>Produtos</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconMenu /> <S.TitleItemMenu menuOpen={menuOpen}>Cardápios</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCombos /> <S.TitleItemMenu menuOpen={menuOpen}>Combos</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconPromotion  /><S.TitleItemMenu menuOpen={menuOpen}>Promoções</S.TitleItemMenu></S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCustom /> <S.TitleItemMenu menuOpen={menuOpen}>Customização</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconLoyalty /><S.TitleItemMenu menuOpen={menuOpen}>Fidelidade</S.TitleItemMenu></S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconCoupon /> <S.TitleItemMenu menuOpen={menuOpen}>Cuponagem</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconOrdersAvaliations /> <S.TitleItemMenu menuOpen={menuOpen}>Avaliações de Pedidos</S.TitleItemMenu> </S.ItemMenu>
                <S.ItemMenu menuOpen={menuOpen}> <IconStoreAvaliations /> <S.TitleItemMenu menuOpen={menuOpen}>Avaliações de Lojas</S.TitleItemMenu> </S.ItemMenu> */}
                <S.FooterSideBar menuOpen={menuOpen}>
                        <S.TopFooter menuOpen={menuOpen}>
                             <S.WrapperUserFooter menuOpen={menuOpen}>
                                <S.WrapperImg>
                                    <S.UserImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                                </S.WrapperImg>
                                <S.FooterTexts menuOpen={menuOpen}>
                                    <S.UserName>Eduarda Coelho</S.UserName> 
                                    <S.UserOccupation>Customer Success</S.UserOccupation>
                                </S.FooterTexts>
                            </S.WrapperUserFooter>   
                            <S.WrapperIconExit>
                                <IconExit /> 
                            </S.WrapperIconExit>
                        </S.TopFooter>
                        <S.BottomFooter menuOpen={menuOpen}>
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.ProfileImg menuOpen={menuOpen} src={Woman} alt="imagem do usuário" />
                            <S.PlusProfileImg> <IconPlus /> </S.PlusProfileImg>
                        </S.BottomFooter>
                </S.FooterSideBar>
        </S.Sidebar> 
    )
} 