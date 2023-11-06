const Categories = props => {
  const { categories, filterItems } = props;

  return (
    <div className="btn-container">
      {categories.map(category => (
        <button
          key={category}
          type="button"
          className="btn"
          onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
