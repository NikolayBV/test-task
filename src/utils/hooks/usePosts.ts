import {useEffect, useMemo, useState} from "react";
import {Post} from "../../common/interfaces";
import PostsService from "../services/PostsService";

export const usePosts = (page: number) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const {totalCount, data} = await PostsService.getPosts(page);
            if (totalCount) {
                setTotal(+totalCount)
            }
            setPosts(data);
        })()
    }, [page]);
    return useMemo(() => {
        return {
            posts,
            totalCount: total
        }
    }, [posts, total]);
}
