import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`;

  function getData() {
    Axios.get(API_URL).then(result => {
      console.log(result.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
