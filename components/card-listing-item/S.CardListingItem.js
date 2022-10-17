import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div`
  display: inline-block;
  padding: 10px 12px 10px 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 0 8px 0 8px;
`;

export const Image = styled(NImage)`
  width: 186px;
  height: 171px;
`;

export const ItemName = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  margin-top: 6px;
`;

export const ItemPrice = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const ItemCondition = styled(ItemPrice)``;
