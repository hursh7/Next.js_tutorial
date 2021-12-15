import { useEffect, useState } from 'react';
import Head from 'next/head';
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then(result => {
      setList(result.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Tutorial</title>
      </Head>
      <h3>베스트 상품</h3>
      <ItemList list={list.slice(0, 9)} />
    </div>
  );
}
