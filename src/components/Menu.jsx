import Item from "./Item";

const Menu = props => {
  const { items } = props;

  return (
    <div className="section-center">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Menu;
