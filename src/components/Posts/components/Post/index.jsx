import * as SC from "./styles";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "../../../Link";

export const Post = ({ post }) => (
  <SC.Post>
    <SC.Image src={post.image} alt={post.title} />
    <SC.Content>
      <SC.Title>{post.title}</SC.Title>
      <SC.Description>{post.description}</SC.Description>
      <Link to={`/posts/${post.id}`}>
        Подробнее
        <FaArrowRight />
      </Link>
    </SC.Content>
  </SC.Post>
);
