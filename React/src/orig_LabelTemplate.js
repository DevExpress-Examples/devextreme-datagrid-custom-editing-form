import React from 'react';

const LabelTemplate = (iconName) => 
    (data) => (<div><i className={`dx-icon dx-icon-${iconName}`}></i>{data.text}</div>);

export default LabelTemplate;
