function serializeObjectToQuery(object) {
  const output = [];
  for (let key in object)
    if (object.hasOwnProperty(key)) {
      output.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(object[key])
      );
    }
  return output.join("&");
}

export default serializeObjectToQuery;
