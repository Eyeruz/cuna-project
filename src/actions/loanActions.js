export default function qualifiedCheck() {
  return (dispatch) => {
    fetch("https://60260cf4186b4a001777fb7d.mockapi.io/autoloan/form", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
}
