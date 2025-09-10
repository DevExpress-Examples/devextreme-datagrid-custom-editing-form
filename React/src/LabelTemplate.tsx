interface LabelTemplateData {
  [key: string]: any;
  text?: string;
}

// eslint-disable-next-line no-unused-vars
function LabelTemplate(iconName: string): (data: LabelTemplateData) => JSX.Element {
  function Template(data: LabelTemplateData): JSX.Element {
    return (
      <div>
        <i className={`dx-icon dx-icon-${iconName}`}></i>
        {data.text}
      </div>
    );
  }
  (Template as any).displayName = `LabelTemplate(${iconName})`;
  return Template;
}

export default LabelTemplate;
