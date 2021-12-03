import React from 'react';

const Marker = (props) => {
  const {color, name, id} = props;

  return (
    <div
      className="marker pin"
      style={{backgroundColor: color, cursor: 'pointer'}}
      title={name}
    />
  );
};

export default Marker;