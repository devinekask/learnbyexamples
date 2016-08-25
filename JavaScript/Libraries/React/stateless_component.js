// 📌 Stateless Component
// 💬 Prefered form is a pure function

// 🔵 Immutable

const StatelessComponent = props => {
  return(
    <section>
      <h1>Hi {props.firstName}</h1>
    </section>
  );
};
