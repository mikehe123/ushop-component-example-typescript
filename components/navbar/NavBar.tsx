import React from 'react';
// import styles from '@styles/Nav.module.css';
import * as data from './links.json';
import * as S from "./S.NavBar"
import Button from '@components/button/Button';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBell from "@fortawesome/free-solid-svg-icons";
// import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
// library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize)
import UShop from "@asset/icons/ushop.svg";
import Notification from "@asset/icons/notification.svg";
import Messages from "@asset/icons/messages.svg";
import Account from "@asset/icons/account.svg";
import Cart from "@asset/icons/cart.svg";
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
    return (
        <S.width100>
            <S.navbar_main>
                <S.link_ushop>
                    <S.Image src={UShop} />
        
                </S.link_ushop>


                <S.link_main> About </S.link_main>
                <S.link_main> Help </S.link_main>
                <S.link_main> Sell </S.link_main>

                <S.buttonsContainer>
                {/* <input type="text" placeholder="Search.." className="search"></input> */}
                <S.search placeholder="Search"/>
                <S.Image src={Notification} />
                <S.Image src={Messages} />
                <S.Image src={Account} />
                <S.Image src={Cart} />
                </S.buttonsContainer>
            </S.navbar_main>
            <S.navbar>
                <Links links={links} />
            </S.navbar>
        </S.width100>
    )
}

export default Nav;