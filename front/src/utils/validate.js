export function checkFieldsExist(data) {
  const returnObj = { result: true, errorFields: [] };
  for (let field in data) {
    if (data[field].trim() === "") {
      returnObj.result = false;
      returnObj.errorFields.push(field);
    }
  }
  return returnObj;
}

export function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
