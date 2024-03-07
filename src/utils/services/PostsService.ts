import {COMMON} from "../../common/constants";
import {Post} from "../../common/interfaces";

class MyPostsService {
    url: string;
    constructor() {
        this.url = process.env.REACT_APP_BASE_URL || '';
    }

    async getPosts(page: number): Promise<{ totalCount: string | null, data: Post[] }> {
        try {
            const response = await fetch(`${this.url}?_page=${page}&_limit=${10}`);
            const totalCount = response.headers.get('X-Total-Count');
            const data = await response.json();
            return { totalCount, data };
        } catch (e) {
            console.log(e);
            throw new Error(COMMON.ERROR)
        }
    }

    async getPost(id: string): Promise<Post> {
        try {
            const response = await fetch(`${this.url}/${id}`);
            return await response.json();
        } catch (e) {
            console.log(e);
            throw new Error(COMMON.ERROR)
        }
    }
}

const PostsService = new MyPostsService();

export default PostsService;
