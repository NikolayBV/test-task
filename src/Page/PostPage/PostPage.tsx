import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import PostItem from "../../components/PostItem";
import styles from './PostPage.module.css'
import Button from "../../components/Button";
import {usePost} from "../../utils/hooks/usePost";

const PostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();
    const post = usePost(postId)

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.postWrapper}>
            {post ? (
                <PostItem id={post.id} title={post.title} body={post.body}/>
            ) : (
                <p>Loading ...</p>
            )}
            <Button onClick={handleGoBack} title={'Back'}/>
        </div>
    );
};

export default PostPage;
