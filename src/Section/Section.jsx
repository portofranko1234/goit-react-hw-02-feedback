import React from "react";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section className="section">
      {title && <h2 className="sectionTitle">{title}</h2>}
      {children}
    </section>
  );
}
Section.defaultProps = { title: "" };

export default Section;
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
