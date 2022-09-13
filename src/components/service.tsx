import * as React from 'react';

const Service:React.FunctionComponent<ServiceItem.ServiceItemProps> = (props) => {
  
    return (
      <div className="cell card callout secondary" id={props.serviceItemData.uuid}>
        <div className="grid-x grid-margin-x">
          <div className="cell small-3">
            <a href={props.serviceItemData.url} aria-label={props.serviceItemData.title}>
              <img src={props.serviceItemData.imageSmall.urlAbsolute} alt={props.serviceItemData.description}/>          
            </a>
          </div>
          <div className="cell auto">
            <a href={props.serviceItemData.url} aria-label={`${props.serviceItemData.title} page`}>
            <strong>{props.serviceItemData.title}</strong>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Service;