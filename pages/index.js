import Title from "../components/Title";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <>
      <Title title="Home" />
      <div className={styles.container}>
        {data.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post.title} </h1>
              <hr />
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  let data = await res.json();
  return {
    props: { data: data },
  };
}
