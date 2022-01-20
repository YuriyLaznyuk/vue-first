export default {
  props: {
    showM: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:showM", false);
    },
  },
  mounted() {},
};
