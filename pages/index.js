import { useEffect, useState } from 'react';
import { Loader, Header, Divider } from 'semantic-ui-react';
import Head from 'next/head';
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | Tutorial</title>
        <meta name='description' content='Next.js tutorial home'></meta>
      </Head>
      <>
        <Header as='h3' style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as='h3' style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
