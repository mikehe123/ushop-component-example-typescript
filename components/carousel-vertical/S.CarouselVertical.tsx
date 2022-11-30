import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 44px 0 44px 0;
`;

export const ContainerThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 16px;
`;

export const Thumbnail = styled(NImage)``;
export const Image = styled(NImage)``;

export const ImageWrap = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 16px;
  display: inline-block;
  margin-right: 28px;
  img {
    object-fit: cover;
    width: 100% !important;
    height: 316px !important;
  }
`;

export const ThumbnailWrap = styled.div`
  width: 50px !important;
  height: 45.71px !important;
`;

export const ContainerProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
  margin-right: 50px;
`;
export const ProductName = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;
  margin-bottom: 4px;
`;
