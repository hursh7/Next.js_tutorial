import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
// import Image from 'next/image';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>Next.js</div>
        <Header as='h1'>Tutorial</Header>
      </div>
      <Gnb />
    </div>
  );
}
