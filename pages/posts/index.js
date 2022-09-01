import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Posts({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <H3Text>There are {posts.length} posts here , check it out</H3Text>

      {posts.map((item, index) => (
        <Link href={`/posts/${item.id}`} key={item.id}>
          <a>
            <div key={item.id}>
              <p>
                {" "}
                {index + 1} : {item.title}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const responseTodoDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  const dataJson = await responseTodoDetail.json();

  console.log("DATA --" + JSON.stringify(dataJson));

  return {
    props: {
      posts: dataJson,
    },
  };
}

const H3Text = styled.h3`
  color: blue;
`;
