import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div`
  height: 50vh;
  grid-template-columns: 2fr 3.5fr 1.2fr;
  width:90%;
  display: grid;
`

export const ContainerItemLeft = styled.div`
  text-align: center;
  padding: 10px 12px 10px 10px;
`;

export const ContainerItemMid = styled.div`
  padding: 20px 10px 10px 50px;
`;

export const ContainerItemRight = styled.div`
  text-align: center;
  padding-top: 60%; 

`;

export const Image = styled(NImage)`
  width: 286px;
  height: 271px;
`;


export const ItemName = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 16px;
  padding: 6px 0px 20px 0px;

`;

export const ItemPrice = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 19px;
  display: flex;
  padding: 3px 0px 3px 0px;
`;

export const Bold = styled.div`
    font-weight: bold;
`

export const ItemCondition = styled(ItemPrice)``;
