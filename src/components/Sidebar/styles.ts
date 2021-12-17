import styled from 'styled-components';
import { colors } from '../../styles/theme';

import { ISideBar } from '../../utils/interfaces'

const { white,  light_purple, dark_purple, gray3} = colors;

export default {
    Sidebar: styled.aside<ISideBar>`
        z-index: 1; 
        width: ${({ menuOpen }) => menuOpen ? '117px' : '352px'};
        transition: width 0.5s ease;
        height: auto;
        background-color: ${white};
        position: fixed;
        left: 0;
    `,

    HeaderSideBar: styled.div<ISideBar>`
        display: flex;
        justify-content: space-around;
        flex-direction: ${({ menuOpen }) => menuOpen ? 'column-reverse' : 'row'};
        margin: 30px -30px;
        align-items: center;
        height: 100px;
    `,

    WrapLogo: styled.div<ISideBar>`
        margin-left: ${({ menuOpen }) => menuOpen ? '0' : '-18px'};
    `, 
    
    ItemMenu: styled.a<ISideBar>`
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: left;
        justify-content: ${({ menuOpen }) => menuOpen ? 'center' : 'left'};
        border-radius: 24px;
        margin 0 auto;
        padding: 0 15px;
        width: ${({ menuOpen }) => menuOpen ? '50px' : '100%'};
        max-width: 312px;
        height: 48px;
        background-color: ${({active}) => active && `${light_purple}`};
        &:hover {
            transition: background-color .2s ease-in-out;
            background-color: ${light_purple};
            span { 
                color: ${dark_purple};
            }
        } 
        span { 
            display: ${({ menuOpen }) => menuOpen && 'none'};
            margin-left: 19px;
        }
    `,
    FooterSideBar: styled.div<ISideBar>`
        border-top: 1px solid ${gray3};
        bottom: 0;
        max-height: 160px;
        height: auto;
        padding-bottom: ${({ menuOpen }) => menuOpen && '30px'};
        width: 100%;
        padding-top: 30px;
        margin-top: 30px;
    `,
    TopFooter: styled.div<ISideBar>`
            display: flex;
            align-items: center;
            justify-content: space-around;

            span{ 
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                height: 40px;
                width: 70%;
                img{
                    border-radius: 50px;
                    height:48px;
                    width: 48px;
                }
                div.texts {
                    display: ${({ menuOpen }) => menuOpen ? 'none' : 'flex' };
                    flex-direction: column;
                    justify-content: left;
                    align-items: left;
                    width: 100%;
                    margin-left: 8px;

                    h5{
                        font-weight: 400;
                        font-size: 12px;
                    }

                }
            }

            i {
                display: ${({ menuOpen }) => menuOpen && 'none' };
            }
    `,
    BottomFooter: styled.div<ISideBar>`
        width: 100%;   
        display: flex;
        visibility: ${({ menuOpen }) => menuOpen ? 'hidden' : 'visible' };
        opacity: ${({ menuOpen }) => menuOpen ? '0' : '1' };
        transition: visibility 0s, opacity 0.5s linear;
        align-items: center;
        justify-content: left;
        height: ${({ menuOpen }) => menuOpen ? '0' : '80px' };
        padding-left: 20px;
        img{ 
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid ${white};
            margin-right: -13px;
        }

        span {  
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid ${white};
            background-color: ${dark_purple};
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
} 