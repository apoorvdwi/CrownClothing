import React from 'react';
import MenuItem from '../menuItems/menuItems';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directoryMenu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
