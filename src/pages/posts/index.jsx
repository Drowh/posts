import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
export const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?t=st=1742436029~exp=1742439629~hmac=6a56d2bf43b5e9aade548034575da00018548a71c70b88487b564554b02ff847&w=826",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi deleniti assumenda nobis animi recusandae? Veniam possimus ducimus vel. Repellendus voluptatibus corrupti dolorem magni tempora molestias alias, maiores minima beatae a.",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg?t=st=1742436114~exp=1742439714~hmac=361bd9adc9d2c4d90add6c2386375923111f0e5d614a6d463a3bf2ee7daaec0b&w=826",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi deleniti assumenda nobis animi recusandae? Veniam possimus ducimus vel. Repellendus voluptatibus corrupti dolorem magni tempora molestias alias, maiores minima beatae a.",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://img.freepik.com/free-photo/grey-kitty-with-monochrome-wall-her_23-2148955114.jpg?t=st=1742437091~exp=1742440691~hmac=3a638d5fa37ec9cf038c5a5c8f469c3472b498acf1657ed471fae41a0ca34c42&w=900",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi deleniti assumenda nobis animi recusandae? Veniam possimus ducimus vel. Repellendus voluptatibus corrupti dolorem magni tempora molestias alias, maiores minima beatae a.",
  },
];

export const PostsPage = () => (
  <>
    <Typo>Публикации</Typo>
    <Posts posts={INITIAL_POSTS} />
  </>
);
