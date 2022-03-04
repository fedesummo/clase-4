// Importing project stylesheet.
import './ListContainer.css'

const ListContainer = ( {brands} ) => {
  return (
    <>
        <h1>Find in our store the products of the best brands!</h1>
        <ul>{brands.map( (element) => <li>{element}</li> )}</ul>
    </>
  );
};

export default ListContainer;