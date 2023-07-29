import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://albertakrong.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://albertakrong.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
