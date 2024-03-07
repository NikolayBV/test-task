import React, {useState} from 'react';
import styles from './PostsPage.module.css';
import {usePosts} from "../../utils/hooks/usePosts";
import PostItem from "../../components/PostItem";
import Button from "../../components/Button";
import {handlePagination} from "../../utils/functions/common";

const PostsPage = () => {
    const [page, setPage] = useState<number>(1);
    const {posts, totalCount} = usePosts(page)

    return (
        <div className={styles.postsContainer}>
            {posts.length ? posts.map((post) => (
                <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
            )) : (
                <p>Loading...</p>
            )}
            <div className={styles.btnWrapper}>
                <Button onClick={() => handlePagination(setPage, 'prev', totalCount)} title={'Prev'}/>
                <Button onClick={() => handlePagination(setPage, 'next', totalCount)} title={'Next'}/>
            </div>
        </div>
    );
};

export default PostsPage;
