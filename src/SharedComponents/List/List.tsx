interface ListProps {
  list: string[];
  label: string;
}

const List = ({ list, label }: ListProps) => {
  return (
    <div>
      <div><b>{label}</b></div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
