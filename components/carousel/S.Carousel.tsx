import styled from "styled-components";
import * as listingStyle from "@components/listing/S.Listing";

export const Title = listingStyle.Title;
export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1234px;
`;

export const Container = styled.div``;

export const ContainerItem = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  justify-items: flex-start;
`;
