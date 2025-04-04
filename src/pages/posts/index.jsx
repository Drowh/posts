import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { useEffect, useState } from "react";
import { getPosts } from "../../redux/slices/postSlice";
import { Loader } from "../../components/ui/Loader";
import { Pagination } from "../../components/ui/Pagination";
import { Container } from "../../components/Container"

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; 

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = list ? list.slice(indexOfFirstPost, indexOfLastPost) : [];

  const handlePageChange = (page) => {
    console.log("Текущая страница:", page);
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

  if (!list && loading) {
    return <Loader />;
  }

  if (!list) {
    return <>404</>;
  }

  return (
    <>
      <Typo>Публикации</Typo>
      <Container>
        <Posts posts={currentPosts} />
        <Pagination
          totalItems={list.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  );
};