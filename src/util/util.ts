///<reference path='../typings/app.d.ts'/>


export async function loadData<T extends object>(url: string): Promise<T> {
  return await fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{data: T}>
    })
    .then(data => {
      return data.data;
    });
}


// NOTE: extracts our audiences for the left side listing
export function extractAudiences (categoryData:Services.CategoryData[], tsData:Services.ServiceData[]):Services.AudienceData[] {
  // NOTE: our list of categories, will always have an "all"
  let audiences:Services.AudienceData[] = [{title: "All Categories", uuid: "00000000-0000-0000-0000000000000000"}];
  
  for(let tsItem in tsData) {
    //console.log(tsData[tsItem].category);
    for(let tsCategory in tsData[tsItem].category) {
      // NOTE: there may be more than one category assigned to this task/service, to we need to cycle through all present
      let currentTSCategory:string = tsData[tsItem].category[tsCategory]; 
      for(let category in categoryData) {
        if(categoryData[category].uuid === currentTSCategory) {
          let tempItem:Services.AudienceData = {title: categoryData[category].title, uuid: categoryData[category].uuid};
          if(!audiences.some(a => a.uuid === tempItem.uuid)) {
            //console.log();
           audiences.push({
            title: tempItem.title,
            uuid: tempItem.uuid
           });
          }
        }
      }
    }
  }
  // NOTE: return our list of audiences.
  return audiences;
}

export function filterByCategory(category: string, serviceCollection: Services.ServiceData[]):Services.ServiceData[] {
  let resultSet:Services.ServiceData[] = [];

  // NOTE: for each item in the incoming collection
  for(let item in serviceCollection) {
    // NOTE: there may be more than one category assigned to any service, so we need to check them all against what we need to return
    for(let c in serviceCollection[item].category) {
      // NOTE: if we have a match in the list of categories in this item...
      if(serviceCollection[item].category[c] === category) {
        // NOTE: push the item to the return set
        resultSet.push(serviceCollection[item]);
      }
    }
  }

  return resultSet;
}

export function filterByText(filterText: string, serviceCollection: Services.ServiceData[]):Services.ServiceData[] {
  let resultSet:Services.ServiceData[] = [];

  for(let item in serviceCollection) {
    // NOTE: the text we are looking to match could be in either the "description" or "title" fields given those are relevant text
    if(serviceCollection[item].description.toLowerCase().includes(filterText.toLowerCase())) {
      resultSet.push(serviceCollection[item]);
    }

    if(serviceCollection[item].title.toLowerCase().includes(filterText.toLowerCase())) {
      resultSet.push(serviceCollection[item]);
    }
  }
  return resultSet;
}

