import Gnb from './Gnb';

export default function Top() {
  return (
    <header style={{ display: 'flex' }}>
      <img
        src='/images/logo.png'
        alt='logo'
        style={{ display: 'block', width: '100px' }}
      />
      <Gnb />
    </header>
  );
}
