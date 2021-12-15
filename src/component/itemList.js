import { Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map(item => (
            <Grid.Column key={item.key}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <Image src={item.image_link} alt={item.name} />
                  <strong>{item.name}</strong>
                  <strong>{item.price}</strong>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
