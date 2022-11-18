import React from 'react';
// import styles from '@styles/Nav.module.css';
import * as data from './links.json';
import * as S from "./S.NavBar"
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
                    <S.Links>
                        {/* <a href={link.href}>
                            {link.label}
                        </a> */}
                        <S.Links>{link.label}</S.Links>
                    </S.Links>
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
                    <a href=''>UShop</a>
                </S.link_ushop>
                <S.link_main>
                    <a href=''>About</a>
                </S.link_main>
                <S.link_main>
                    <a href=''>Help</a>
                </S.link_main>

                <S.buttonsContainer>
                    <S.button>Log In</S.button>
                    <S.button>Sign Up</S.button>
                </S.buttonsContainer>
            </S.navbar_main>
            <S.navbar>
                <Links links={links} />
            </S.navbar>
        </S.width100>
    )
}

export default Nav;