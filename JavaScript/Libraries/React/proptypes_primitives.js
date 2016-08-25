// 📌 Proptypes for primitives
// ❗ Example assumes PropTypes is a named import

// 💬 Can have an extra property isRequired

const Person = props => {…};

Person.propTypes = {
  firstName: PropTypes.string,
  age: PropTypes.number,
  adult: PropTypes.bool,
  clothes: PropTypes.array,
  breathe: PropTypes.func,
  secret: PropTypes.symbol,
  
  lastName: PropTypes.string.isRequired,
};
