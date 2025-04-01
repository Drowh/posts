import { useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";


export const PostsPage = () => {
  const posts = useSelector((state) => state.posts.list)
  return (
  <>
    <Typo>Публикации</Typo>
    <Posts posts={posts} />
  </>
)}
