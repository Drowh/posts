import styled from "styled-components";
import { Button } from "../../../components/ui/button";

export const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const PostTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const PostContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;

  p {
    margin-bottom: 20px;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

