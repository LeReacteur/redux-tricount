import React from 'react';
import PropTypes from 'prop-types';

export const Amount = ({ value }) => {
  const leftNum = Math.floor(value);
  const rightNum = Math.abs(Math.floor((value * 100) % 100)).toString();
  const rightNumPadded = (rightNum.length === 1 ? '0' : '') + rightNum;

  return (
    <div className="amount">
      <span className="amount--big-num">{leftNum}</span>
      <span className="amount--small-num">{',' + rightNumPadded}</span>
      <span className="amount--currency">{'€'}</span>
    </div>
  );
};

Amount.propTypes = {
  value: PropTypes.number.isRequired,
};
