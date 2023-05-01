


const ShoppingList = () => {
  const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', isFruit: true, id: 3},
  ];

    const listItems = products.map(product =>
        <li
          key={product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
          }}
          >{product.title}</li>);
          return (
            <ul>{listItems}</ul>
          )
}

export default ShoppingList;