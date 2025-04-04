import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/ui/Typo";
import { useEffect, useState } from "react";
import { getPosts } from "../../redux/slices/postSlice";
import { Loader } from "../../components/ui/Loader";
import { Pagination } from "../../components/ui/Pagination";
import { Container } from "../../components/Container";
import * as SC from "./styles";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const itemsPerPage = 10;

  const filteredAndSortedPosts = list
    ? list
        .filter((post) =>
          post.title.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => {
          if (sortOrder === "asc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
    : [];

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredAndSortedPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
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
    <Container>
      <Typo>Публикации</Typo>
      <SC.FilterContainer>
        <SC.InputFilter
          type="text"
          placeholder="Фильтровать по названию"
          value={filter}
          onChange={handleFilterChange}
        />
        <SC.SortContainer>
          <SC.SortLabel htmlFor="sortOrder">Сортировать по:</SC.SortLabel>
          <SC.SortSelect value={sortOrder} onChange={handleSortChange}>
            <option value="asc">От А до Я</option>
            <option value="desc">От Я до А</option>
          </SC.SortSelect>
        </SC.SortContainer>
      </SC.FilterContainer>
      <Posts posts={currentPosts} />
      <Pagination
        totalItems={filteredAndSortedPosts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};
