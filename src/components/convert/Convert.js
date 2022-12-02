import axios from "axios";
import { getRes } from "../unit-converter/Unit-Converter";

const convert = (value, inputVal, outputVal, type) => {
  const config = {
    headers: {
      Authorization: "Bearer 373|5muD1RjjZDqrhmJk628CK0b17ky0K6SlMFnAYxkX",
    },
  };

  axios
    .get(
      `https://zylalabs.com/api/189/measurement+unit+conversion+api/202/unit+converter?value=${value}&from=${inputVal}&to=${outputVal}&measure=${type}`,
      config
    )
    .then(function (response) {
      const data = response.data.value;
      console.log(data);
      getRes(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default convert;
