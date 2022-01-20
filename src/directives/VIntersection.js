export default {
  mounted(el, binding) {
    console.log(el, binding);

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      console.log("entries", entries, "observer", observer);
      if (entries[0].isIntersecting) {
        console.log("YES");
        // this.loadAllPosts();
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: "intersection",
};
