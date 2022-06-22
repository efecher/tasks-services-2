import * as React from 'react';
import Service from './service';
//import * as Util from '../util/util';

class ServiceList extends React.Component<ServiceItem.ServiceListProps> {
  
  createViewFromResults = (data:Services.ServiceData[]):JSX.Element[] => {
    let outputList:JSX.Element[] = [];

    for(let item of data) {
      
      outputList.push(<Service key={item.uuid} serviceItemData={item} />);
    }

    return outputList;
  }
  
  render() {
    if(this.props.serviceResultSet.length) {
      return (
        <>
          <strong>{this.props.serviceResultSet.length} matches</strong>
          <div className="grid-x grid-padding-x small-up-2 medium-up-3">
            {this.createViewFromResults(this.props.serviceResultSet)}
          </div>
        </>  
      )
    } else {
      return (
        <div className="panel">
          <p>No Results to display that match combination of search parameters. Please try a different combination.</p>
        </div>
      )
    }
  }
}

export default ServiceList;