export default function Users({ user }) {
  return (
    <>
      <div>This is demo static generated data with user api</div>
      <div>
        {" "}
        {user.id} : {user.name}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const responsePostsDetail = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const response = await responsePostsDetail.json();

  return {
    props: {
      user: response,
    },
  };
}
