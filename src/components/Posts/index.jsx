import * as SC from "./components/styles";
import { Post } from "./components/Post";

export const Posts = ({ posts }) => (
  <SC.PostsContainer>
    <SC.Posts>
      {posts.length > 0 ? (
        posts.map((post) => (
          <SC.PostWrapper key={post.id}>
            <Post post={post} />
          </SC.PostWrapper>
        ))
      ) : (
        <SC.NoPostsMessage>Пока нет доступных постов.</SC.NoPostsMessage>
      )}
    </SC.Posts>
  </SC.PostsContainer>
);