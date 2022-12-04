import React, { useEffect, useState } from 'react';
// import styles from '@styles/Nav.module.css';
import * as data from './links.json';
import * as S from "./S.NavBar"
import UShop from "@asset/icons/ushop.svg";
import Notification from "@asset/icons/notification.svg";
import Messages from "@asset/icons/messages.svg";
import Account from "@asset/icons/account.svg";
import Cart from "@asset/icons/cart.svg";
import Button from '@components/button/Button';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};



const Links: React.FC<{ links: Link[] }> = ({ links }) => {


    return (
        <S.linksContainer>
            {links.map((link: Link) => {
                return (
                    <S.Links>{link.label}</S.Links>
                )
            })}
        </S.linksContainer>
    )
};

const Nav: React.FC<{}> = () => {
    const [isLogin, setIsLogin] = useState(true)

        useEffect(()=>{

        
        },[isLogin])

    return (
        <S.width100>{
            isLogin ?
            <S.navbar_main>
                <S.link_ushop>
                    <S.Image src={UShop} />
        
                </S.link_ushop>


                <S.link_main> About </S.link_main>
                <S.link_main> Help </S.link_main>
                <S.link_main> Sell </S.link_main>

                <S.buttonsContainer>
                <S.search placeholder="  Search"/>
                <S.Image src={Notification} />
                <S.Image src={Messages} />
                <S.Image src={Account} />
                <S.Image src={Cart} />
                </S.buttonsContainer>
            </S.navbar_main>
:
            <S.navbar_main>
                <S.link_ushop>
                <S.Image src={UShop}/>
                </S.link_ushop>

                <S.link_main>
                    About
                </S.link_main>
                <S.link_main>
                    Help
                </S.link_main>

                <S.buttonsContainer>
                    <Button buttonText='Log In' width={100}/>
                    <Button buttonText='Sign Up' width={100}/>
                </S.buttonsContainer>
            </S.navbar_main>

}

            <S.navbar>
                <Links links={links} />
            </S.navbar>
        </S.width100>
    )
}

export default Nav;

