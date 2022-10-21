import styled from "styled-components";
import * as listingStyle from "@components/listing/S.Listing"

export const Title = listingStyle.Title
export const ContainerListing = listingStyle.ContainerListing

export const Container = styled.div`
  width: 100%;
  /* height:100%; */
  background-color: #E8DCCC;
  padding: 20px 20px 20px 20px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`;


export const ContainerItem = styled.div`
  width: 80%;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  justify-items: flex-start;
  max-width: 1234px;
`;
