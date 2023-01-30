import { ProductListItem } from "./ProductListItem";

export function Lista(props: { data: any; }):JSX.Element {
    
  const data = props.data;
  console.log("Hello");
  return data.map((record: { id: number; title: string; images: string; description: string; price: number; }) => {
    return (
      <div>
        <ProductListItem
          key={record.id}
          title={record.title}
          img={record.images}
          description={record.description}
          price={record.price}
        />
      </div>
    );
  });
}
