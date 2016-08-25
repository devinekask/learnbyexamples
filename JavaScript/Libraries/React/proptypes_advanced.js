// 📌 Proptypes for advanced types

const Component = props => {…};

Component.propTypes = {
  node: PropTypes.node, // A DOM Node
  element: PropTypes.element, // A React Element
  instance: PropTypes.instanceOf(SuperClass), // An instance of a class (uses the instanceof operator)
  enum: PropTypes.oneOf(['Type 1', 'Type 2']), // An enum (limited to specific values)
}