import Gnb from './Gnb';
// import Image from 'next/image';

export default function Top() {
  return (
    <header style={{ display: 'flex' }}>
      {/* <Image
        src='/images/logo.png'
        alt='logo'
        layout='fill'
        style={{ width: '50px', display: 'block' }}
      /> */}
      <p>logo</p>
      <Gnb />
    </header>
  );
}
