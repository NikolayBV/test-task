import {useEffect, useState} from "react";
import PostsService from "../services/PostsService";
import {Post} from "../../common/interfaces";

export const usePost = (postId: string | undefined) => {
    const [currentPost, setCurrentPost] = useState<Post | null>(null);

    useEffect(() => {
        if (postId) {
            (async () => {
                const fetchPost = await PostsService.getPost(postId);
                setCurrentPost(fetchPost);
            })()
        }
    }, [postId]);

    return currentPost;
}
