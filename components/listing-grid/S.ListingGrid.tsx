import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;
  display: inline;
  margin-right: 20px;
`;

export const IndicatePageNumber = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: inline;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  padding-top: 20px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapJumpPageListing = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerJumpPageListing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  padding: 0px 10px 0px 10px;
  margin-bottom: 30px;
  border-radius: 2px 2px 2px 2px;
`;

export const TargetPage = styled.div<{ currentPage: Boolean }>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 8px 12px 8px 12px;
  border: ${({ currentPage }) => (currentPage ? "2px solid #A6DDCE" : "none")};
`;
