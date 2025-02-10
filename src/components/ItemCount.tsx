interface ItemCountProps {
  name: string;
  count?: number;
}

const ItemCount = ({ name, count = 0 }: ItemCountProps) => {
  return (
    <div key={name}>
      {name} count: {count}
    </div>
  );
};

export default ItemCount;
