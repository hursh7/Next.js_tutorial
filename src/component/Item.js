import { useRef } from 'react';
import { Button, Image } from 'semantic-ui-react';

export default function Item({ item }) {
  const { image_link, name, price, description } = item;
  const btnRef = useRef();
  return (
    <>
      <div>
        <Image src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <Button ref={btnRef} color='orange'>
        Buy it!
      </Button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
}
