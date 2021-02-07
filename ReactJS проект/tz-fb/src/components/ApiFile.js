function getElement(index){
  let data = fetch("http://php.loc/elements.php",{
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    }
  })
  .then((response) => response.json())
  return data
}

function getSection(){
  let data = fetch("http://php.loc/sections.php",{
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    }
  })
  .then((response) => response.json())
  return data
}

export { getElement, getSection };
