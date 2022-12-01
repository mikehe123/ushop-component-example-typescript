import styled from "styled-components";

export const Container = styled.div``;

export const navbar_main = styled.div`
    width: 100%;
    height: 70px;
    background: #FFF;
    position: relative;
    align-items: center;
    justify-content: right;
    font-family: Lato;
    overflow: hidden;
    float: left;
`;

export const navbar = styled.div`
    width: 100%;
    height: 50px;
    background: #95CE97;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    font-family: "Baloo 2";
`;

export const width100 = styled.div`
    width: 100%;
`;

export const linksContainer = styled.div`
    float: left;
    margin-right: 20px;
    display: flex;
    width: 300px;
    justify-content: space-evenly;
`;

export const Links = styled.a`
    display: inline-block;
    text-decoration: none;
    color: white;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 4;
`;

export const link_main = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #CCBAA1;
    padding-left: 40px;
    padding-right: 40px;
    font-family: "Baloo 2";
    line-height: 3;
`;

export const link_ushop = styled.a`
    font-size: 24px;
    display: inline-block;
    text-decoration: none;
    color: #CCBAA1;
    padding-left: 40px;
    padding-right: 40px;
    font-family: "Baloo 2";
    line-height: 3;
`;

export const buttonsContainer = styled.div`
    float: right;
    justify-content: right;
    align-items: center;
`;

export const button = styled.button`
    background-color: #95CE97;
    color: white;
    border: none;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 16px;
    border-radius: 8px;
    font-family: "Baloo 2";
    height: 40px;
    line-height: 0.3;
`;
