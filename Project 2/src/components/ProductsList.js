import { ProductListItem } from "./ProductListItem";

export function Lista(props) {
    
  const data = props.data;
  console.log("Hello");
  return data.map((record) => {
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
