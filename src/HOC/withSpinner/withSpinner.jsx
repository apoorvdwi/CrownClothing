import React from 'react';
import './withSpinner.scss';

const WithSpinner = (Wrappedcomponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer" />
      </div>
    ) : (
      <Wrappedcomponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
