// 📌 Proptypes for collections of types.
// ❗ Example assumes PropTypes is a named import

// 💬 Can have an extra property isRequired

const Person = props => {…};

Person.propTypes = {
  food: PropTypes.arrayOf(PropTypes.string),
  schoolGrades: PropTypes.objectOf(PropTypes.number),
  lastNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  face: PropTypes.shape({
    eyeColor: PropTypes.string,
    teeth: PropTypes.number,
    hair: PropTypes.bool,
  }),
};
