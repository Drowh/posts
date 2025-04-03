export const postsAPI = {
  fetchPosts() {
    try {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=6`)
        .then((res) => res.json())
        .then((posts) => posts);
    } catch (ex) {
        console.log(ex);
    }
  },

  fetchFreshPosts(limit = 3) {
    try {
        return fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${limit}&_sort=id&_order=desc`)
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
