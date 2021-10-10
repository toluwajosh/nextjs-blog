import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
