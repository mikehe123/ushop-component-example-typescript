import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  margin: 0 92px 0 92px;
`;

export const ContainerItemLeft = styled.div`
  text-align: center;
  padding: 10px 12px 10px 10px;
  flex: 1 0 auto;
`;

export const ContainerItemMid = styled.div`
  padding: 20px 52px 10px 50px;
`;

export const ContainerItemRight = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Image = styled(NImage)`
  width: 286px;
  height: 271px;
`;

export const ItemName = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 30px;
  margin-bottom: 16px;
`;

export const ItemPrice = styled.div`
  margin-bottom: 4px;
`;
export const ItemDescription = styled(ItemPrice)``;

export const Text = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: inline;
`;
export const TextBold = styled(Text)`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;
`;
