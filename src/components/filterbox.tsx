import * as React from 'react';

const FilterBox:React.FunctionComponent<FilterBoxProps.FilterBox> = (props) => {
  
    return (
      <form className="grid-x grid-padding-x" onSubmit={props.submitHandler}>
        <section className="input-group">
          <input className="input-group-field" style={{fontSize: "1rem", padding: "2rem 1rem"}} id="filterbox-input" type="text" placeholder={props.filterBoxPlaceholder} onChange={props.filterBoxChangeHandler} />
          <div className="input-group-button">
            <input className="button" type="submit" value="Submit" />
            <button onClick={props.resetButtonHandler}  className="button" type="button">Start Over</button>
          </div>
        </section>
      </form>
    ); 
}

export default FilterBox;