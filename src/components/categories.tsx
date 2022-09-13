import * as React from 'react';

class Categories extends React.Component<Category.CategoryProps> {

  // NOTE: generates our category listing for the left side
  generateCategoryListing = (data:Services.AudienceData[]):JSX.Element[] => {
    let listItems:JSX.Element[] = [];

    for(let item of data) {
      //console.log(item);
      listItems.push(<li key={item.uuid}><button className="category-button" value={item.uuid} onClick={() => {this.props.categoryClickHandler(item.uuid)}}>{item.title}</button></li>);
    }
    return listItems;
  }

  

  render() {
    if(this.props.categoryListing.length) {
      return (
        <ul className="no-bullet">
          {this.generateCategoryListing(this.props.categoryListing)}
        </ul>
      );
    }
    
  }
}

export default Categories;