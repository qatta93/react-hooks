import React, { useEffect } from 'react'


const getFetchData = async () => {
  await fetch('https://randomuser.me/api')
    // .then((data) => {
    //   //promise - pending
    //   console.log(data.json())
    //   // response
    //   console.log(data)
    //   return data;
    // })

    // we need to check if status is success because even if it's not, we will get the response!!
    .then((response) => {
      if(!response.ok){
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((actualData) => console.log(actualData.results))
    .catch(err => {
      console.error(err)
    })
}

const postFetchData = () => {

  const data = {"gender":"female","name":{"title":"Ms","first":"Courtney","last":"Romero"},"location":{"street":{"number":2088,"name":"Hillcrest Rd"},"city":"Fargo","state":"Tennessee","country":"United States","postcode":42298,"coordinates":{"latitude":"82.4435","longitude":"75.3869"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"courtney.romero@example.com","login":{"uuid":"3cba354d-50cf-437e-8e60-d33a750c383d","username":"angrysnake275","password":"greedy","salt":"aX8mB6W4","md5":"dd401f3105f2aef48bcc4ce9623188a7","sha1":"d7b161cdde6be9819831cdea9320d7b6c9c79124","sha256":"fed354961096d829966f35f1db0e2558878bd9af84f8918dcbcd82a280a5c367"},"dob":{"date":"1957-05-28T21:25:09.072Z","age":65},"registered":{"date":"2015-01-07T04:32:40.705Z","age":7},"phone":"(407) 352-8251","cell":"(307) 357-3180","id":{"name":"SSN","value":"164-35-2140"},"picture":{"large":"https://randomuser.me/api/portraits/women/48.jpg","medium":"https://randomuser.me/api/portraits/med/women/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/48.jpg"},"nat":"US"}
  
  fetch('https://randomuser.me/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .catch((error) => console.log(error))
}

const deleteFetchData = () => {
  fetch('https://randomuser.me/api/9', {
    method: 'DELETE'
  })
  .then((res) => res.json()) //or res.text()
}


//IIFE
((pageNumber: number = 1) => {
  console.log(pageNumber)
})();

export const FetchPage = () => {

  useEffect(() => {
    getFetchData();
    postFetchData();
  }, [])

  return (
    <div>FetchPage</div>
  )
}

export default FetchPage