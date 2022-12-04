import styled from "styled-components";
import NImage from "next/image";

export const Container = styled.div<{ direction: string }>`
  min-width: 37px;
  min-height: 37px;
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  user-select: none;
`;

export const Image = styled(NImage)<{ direction: string }>`
transform: ${({ direction }) =>
direction === "left" ? "rotate(0deg)" : "rotate(180deg)"};
`;
