import PropTypes from 'prop-types';
import css from "./Section.module.css";
export default function Section({ title, children }) {
  return (
    <section key={0} className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Section };
