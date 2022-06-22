import * as React from 'react';

const FilterBox:React.FunctionComponent<FilterBoxProps.FilterBox> = (props) => {
  
    return (
      <form className="grid-x grid-padding-x" onSubmit={props.submitHandler}>
        <div className="cell medium-12">
          <div className="input-group">
            <input id="filterbox-input" type="text" placeholder={props.filterBoxPlaceholder} onChange={props.filterBoxChangeHandler} />
            <div className="input-group-button">
              <input className="button" type="submit" value="Submit" />
              <button onClick={props.resetButtonHandler}  className="button" type="button">Start Over</button>
            </div>
          </div>
          
        </div>
        
      </form>
    ); 
}

export default FilterBox;