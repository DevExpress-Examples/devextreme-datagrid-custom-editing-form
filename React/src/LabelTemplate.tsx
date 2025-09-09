const LabelTemplate = (iconName: any) => 
    (data: any) => (<div><i className={`dx-icon dx-icon-${iconName}`}></i>{data.text}</div>);

export default LabelTemplate;
