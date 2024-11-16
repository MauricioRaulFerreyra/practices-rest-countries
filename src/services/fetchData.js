//* Render-as-You-Fetch

function getSuspense (promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    res => {
      status = 'success'
      response = res
    },
    err => {
      status = 'error'
      response = err
    }
  );

  const read = ()=> {
    switch(status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response  
      case 'success':
        return response;
      default:
        throw new Error('Invalid status');
    }
  };

  return {read}
}

export function fetchData (URL) {
  const promise = fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });

  return getSuspense(promise);
}