import * as SC from "./styles";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "../../../Link";

export const Post = ({ post }) => {
  
  const image = post.image || "https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg?t=st=1742436114~exp=1742439714~hmac=361bd9adc9d2c4d90add6c2386375923111f0e5d614a6d463a3bf2ee7daaec0b&w=826"
  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
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
};
