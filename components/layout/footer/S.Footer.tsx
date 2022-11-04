import styled from "styled-components";
import NImage from "next/image";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 0 auto;
  height: 221px;
  background-color: #f8f8f8;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 8px;
`;
export const ContainerSectionVariant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextBold = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  color: #26241e;
  margin-bottom: 6px;
`;

export const Text = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #26241e;
`;

export const Divider = styled.div`
  width: 923px;
  height: 0px;
  border: 0.5px solid #26241e;
  margin-top: 30px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 923px;
`;

export const ContainerCopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 923px;
  margin: 16px 0 0px 0;
  padding: 0 60px 0 60px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Image = styled(NImage)``;
