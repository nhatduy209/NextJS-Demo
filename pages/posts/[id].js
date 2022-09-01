import styled from "styled-components";

function DetailPost({ postsDetail }) {
  return (
    <Center>
      <h3> title : {postsDetail.title}</h3>
      <div>content : {postsDetail.body}</div>
    </Center>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const responseTodoDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const dataJson = await responseTodoDetail.json();

  console.log("DATA --" + JSON.stringify(dataJson));

  return {
    props: {
      postsDetail: dataJson,
    },
  };
}

export default DetailPost;

const Center = styled.div`
  display: base-line;
  justify-content: center;
  align-items: center;
`;
