<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <slider-breadcrumb />
    <blog-grid-two-area
      :blogItems="
        blogData
          .filter((b) => b.blog_grid)
          .filter((b) => !b.blog_quote)
          .slice(0, 6)
      "
    />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import blogData from "~~/mixins/blogData";
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SliderBreadcrumb from "~~/components/breadcrumb/SliderBreadcrumb.vue";
import BlogGridTwoArea from "~~/components/blogs/BlogGridTwoArea.vue";
import Footer from "~~/layouts/footers/FooterOne.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, SliderBreadcrumb, BlogGridTwoArea, BackToTop },
  mixins: [blogData],
  setup() {
    useHead({
      title: "Blog Grid 2 - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
