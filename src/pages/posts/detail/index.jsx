import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { INITIAL_POSTS } from "../index";
import { Typo } from "../../../components/Typo";
import { FaArrowUp } from 'react-icons/fa';
import { Link } from "../../../components/Link";

import * as SC from './styles';

export const DetailPostPage = () => {
    const { id } = useParams()
    const currentPost = useMemo(() => INITIAL_POSTS.find(post => post.id === Number(id)), [id])

    if (!currentPost) {
        return <SC.PostContainer>
            <Typo>Пост не найден.</Typo>
        </SC.PostContainer>;
    }

    return (
        <SC.PostContainer>
            <SC.PostTitle>
                <Typo>{currentPost.title}</Typo>
            </SC.PostTitle>
            <SC.PostImage src={currentPost.image} alt={currentPost.title} />
            <SC.PostContent>{currentPost.text}</SC.PostContent>
            <Link to="/posts/">
                Обратно к публикации
            <FaArrowUp />
            </Link>
        </SC.PostContainer>
    );
};
