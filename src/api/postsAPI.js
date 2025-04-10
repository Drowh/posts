export const postsAPI = {
  fetchPosts(limit = null) {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc${
        limit ? `&_limit=${limit}` : ""
      }`;
      return fetch(url)
        .then((res) => res.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },

  fetchFreshPosts(limit = 3) {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=${limit}`;
      return fetch(url)
        .then((res) => res.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },

  fetchById(id) {
    try {
      if (!id) {
        throw new Error("No id");
      }
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((post) => post);
    } catch (ex) {
      console.log(ex);
    }
  },
};
