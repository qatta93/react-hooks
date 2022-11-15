import React from 'react'

const axios = require('axios')

export const AxiosPage = () => {

  (() => axios.get('https://randomuser.me/api')
    .then((res:any) => console.log(res.data.results))
    .catch((err:any) => console.log(err))
  )();

  (async () => {
    try {
      const response = await axios.get('https://randomuser.me/api')
      //data in response!
      console.log(response.data)
    } catch (err){
      console.error(err)
    }
  })();


  (() => {
    const body = {test: 'test'};
    const headers = {'Content-Type': 'application/json'}
    axios.post('https://randomuser.me/api', body, { headers })
    .then((res:any) => console.log(res))
    .catch((err:any) => console.log(err))
  })();


  return (
    <div>AxiosPage</div>
  )
}

export default AxiosPage