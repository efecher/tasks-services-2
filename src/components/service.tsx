import * as React from 'react';

const Service:React.FunctionComponent<ServiceItem.ServiceItemProps> = (props) => {
  
    return (
      <div className="cell service-cell" id={props.serviceItemData.uuid}>
        <div className="card callout secondary" data-equalizer-watch>
          <a href={props.serviceItemData.url}>
            <img src={props.serviceItemData.imageSmall.urlAbsolute} alt={props.serviceItemData.description}/>          
            <strong>{props.serviceItemData.title}</strong>
          </a>
        </div>
      </div>
    );
}

export default Service;