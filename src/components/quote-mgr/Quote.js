import React from 'react';
import PropTypes from 'prop-types';

const Quote
 = ({text, author, tags}) => {
  return (
    <div className="quote">
      <blockquote className="blockquote blockquote-reverse">
        <p className="mb-0">{text}</p>
        <footer className="blockquote-footer">{author} <cite title="Source Title">({tags.join(',')})</cite></footer>
      </blockquote>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Quote;
