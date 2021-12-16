import { Button, Image, Header } from 'semantic-ui-react';

export default function Item({ item }) {
  const { image_link, name, price, description } = item;
  return (
    <>
      <div>
        <Image src={image_link} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
        <strong>${price}</strong>
      </div>
      <Button color='orange'>Buy it!</Button>
      <div>
        <Header as='h3'>Description</Header>
        <p>{description}</p>
      </div>
    </>
  );
}
