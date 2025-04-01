import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { FaArrowUp } from 'react-icons/fa';
import { Link } from "../../../components/Link";
import { getPost } from "../../../redux/slices/postSlice";

import * as SC from './styles';

export const DetailPostPage = () => {
    const { id } = useParams()
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(Number(id)))
    }, [id])

    if (!postForView) {
        return <SC.PostContainer>
            <Typo>Пост не найден.</Typo>
        </SC.PostContainer>;
    }

    return (
        <SC.PostContainer>
            <SC.PostTitle>
                <Typo>{postForView.title}</Typo>
            </SC.PostTitle>
            <SC.PostImage src={postForView.image} alt={postForView.title} />
            <SC.PostContent>{postForView.text}</SC.PostContent>
            <Link to="/posts/">
                Обратно к публикации
            <FaArrowUp />
            </Link>
        </SC.PostContainer>
    );
};
