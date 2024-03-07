import React from 'react';
import {Post} from "../../common/interfaces";
import styles from './PostItem.module.css'
import {Link} from "react-router-dom";

const PostItem = ({title, body, id}: Omit<Post, 'userId'>) => {
    return (
        <div className={styles.post}>
            <h3 className={styles.post__heading}>
                <Link className={styles.post__link} to={`post/${id}`}>
                    {`${id}: ${title}`}
                </Link>
            </h3>
            <p>{body}</p>
        </div>
    );
};

export default PostItem;
