import type { FormTypes } from 'devextreme-react/form';
import React from 'react';

function LabelTemplate(iconName: string): React.FC<FormTypes.SimpleItemLabelTemplateData> {
  return function Template(data: FormTypes.SimpleItemLabelTemplateData): JSX.Element {
    return (
      <React.Fragment>
        <i className={`dx-icon dx-icon-${iconName}`} />
        {data.text}
      </React.Fragment>
    );
  };
}

export default LabelTemplate;
