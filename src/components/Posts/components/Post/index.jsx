import * as SC from "./styles";
import { FaArrowRight } from 'react-icons/fa';

export const Post = ({ post }) => (
  <SC.Post>
    <SC.Image src={post.image} alt={post.title} />
    <SC.Content>
      <SC.Title>{post.title}</SC.Title>
      <SC.Description>{post.description}</SC.Description>
      <SC.DetailLink to={`/posts/${post.id}`}>
        Подробнее
        <FaArrowRight />
      </SC.DetailLink>
    </SC.Content>
  </SC.Post>
);
