import strings from "@/resources/strings";

interface ItemCountProps {
  name: string;
  count: number;
}

const ItemCount = ({ name, count }: ItemCountProps) => {
  return (
    <div key={name} role="status" aria-label="item-count">
      {name} {strings.count}: {count}
    </div>
  );
};

export default ItemCount;
