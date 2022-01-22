import { computed, ref } from "vue";

export default function useSortedAndSearch(sortedPosts) {
  const searchQuery = ref("");
  const sortedAndSearch = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  return {
    sortedAndSearch,
    searchQuery,
  };
}
