import axios from "axios";

export const postModule = {
  state: () => ({
    page: 1,
    limit: 10,
    totalPages: 0,
    searchQuery: "",
    likes: 0,
    disLikes: 5,
    posts: [],
    dialogVisible: false,
    modificatorValue: "",
    isPostLoading: false,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "sort title" },
      { value: "body", name: "sort body" },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts]?.sort((a, b) =>
        a[state.selectedSort]?.localeCompare(b[state.selectedSort])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((elem) =>
        elem.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        // this.isPostLoading = true;
        //--call mutation--//
        commit("setLoading", true);
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${state.page}_limit=${state.limit}`
          // `https://jsonplaceholder.typicode.com/posts?`,
          // {
          //   params: {
          //     _page: this.page,
          //     _limit: this.limit,
          //   },
          // }
        );
        // this.totalPages = Math.ceil(resp.headers["x-total-count"] / this.limit);
        commit(
          "setTotalPages",
          Math.ceil(resp.headers["x-total-count"] / state.limit)
        );
        // this.posts = await resp.data;
        commit("setPosts", await resp.data);
        // this.isPostLoading = false;
        commit("setLoading", false);
      } catch (e) {
        console.log(e.message);
      } finally {
        // this.isPostLoading = false;
        commit("setLoading", false);
      }
    },

    async loadAllPosts({ state, commit }) {
      try {
        // this.page += 1;
        commit("setPage", state.page + 1);
        // this.isPostLoading = true;
        commit("setLoading", true);

        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${state.page}_limit=${state.limit}`
          // `https://jsonplaceholder.typicode.com/posts?`,
          // {
          //   params: {
          //     _page: this.page,
          //     _limit: this.limit,
          //   },
          // }
        );
        // this.totalPages = Math.ceil(resp.headers["x-total-count"] / this.limit);
        commit(
          "setTotalPages",
          Math.ceil(resp.headers["x-total-count"] / state.limit)
        );
        // this.posts = [...this.posts, ...resp.data];
        commit("setPosts", [...state.posts, ...resp.data]);
        // this.isPostLoading = false;
        commit("setLoading", false);
      } catch (e) {
        console.log(e.message);
      } finally {
        // this.isPostLoading = false;
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
