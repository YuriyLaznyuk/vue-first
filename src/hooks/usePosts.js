import axios from "axios";
import { onMounted, ref } from "vue";

export const usePosts = (limit) => {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      // this.isPostLoading = true;
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=1_limit=${limit}`
        // `https://jsonplaceholder.typicode.com/posts?`,
        // {
        //   params: {
        //     _page: this.page,
        //     _limit: this.limit,
        //   },
        // }
      );
      totalPages.value = Math.ceil(resp.headers["x-total-count"] / limit);
      posts.value = await resp.data;
      // this.isPostLoading = false;
    } catch (e) {
      console.log(e.message);
    } finally {
      isPostLoading.value = false;
    }
  };

  onMounted(fetching);
  return {
    posts,
    isPostLoading,
    totalPages,
  };
};
