export const fetchFunc = async (url) => {
  const response = await fetch(url);
  if (!response) {
    return {
      error: "Ha ocurrido un error al acceder a los datos",
    };
  }

  const data = await response.json();
  return {
    data : data
  }
};
