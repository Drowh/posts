import styled from "styled-components";

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 12px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PostWrapper = styled.div`
  flex: 0 1 calc(33.333% - 24px);
  min-width: 280px;
  max-width: 400px;

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 24px);
  }

  @media (max-width: 768px) {
    flex: 0 1 100%;
  }
`;

export const PostsContainer = styled.div`
  background-color: #f8f9fa;
  padding: 10px 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 32px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #2a6df4;
    border-radius: 2px;
  }
`;

export const NoPostsMessage = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-top: 40px;
`;