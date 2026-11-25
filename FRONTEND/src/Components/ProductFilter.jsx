// Defaults match the Bags page. For the Products page use:
// listClassName="products-categories" activeClassName="selected"
export default function ProductFilter({
  categories,
  selected,
  onSelect,
  listClassName = "bags-category-list",
  activeClassName = "active",
}) {
  return (
    <div className={listClassName}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={selected === category ? activeClassName : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}