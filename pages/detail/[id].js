import Head from 'next/head';
import Axios from 'axios';
import Item from '../../src/component/Item';
import { Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline='centered'>
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name='description' content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '729' } },
    // ],
    paths: data.slice(0, 9).map(item => ({
      params: {
        id: item.id.toString(), // 숫자를 문자열로
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // 서버에서 데이터를 받아온다.
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
      // 서버에서 받아 온 데이터를 props에 주입시켜 준다.
    },
  };
}
