import axios from "axios";

axios.defaults.baseURL = "https://6445537b914c816083cc2d15.mockapi.io/users";

export const fetchUsers = async (page, limit, selected) => {
  try {
    if (page && limit) {
      return await axios
        .get(`/?page=${page}&limit=${limit}&followed=${selected}`)
        .then(({ data }) => {
          console.log("get");
          console.log(data);
          return data;
        });
    }
    return await axios.get(`/?followed=${selected}`).then(({ data }) => {
      console.log("get/selected");
      console.log(data);
      return data;
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUsers = async (id, userData) => {
  console.log("updateUsers");
  console.log(userData);
  try {
    await axios.put(`/${id}`, { ...userData }).then(({ data }) => {
      console.log("put");
      console.log(data);
      return data;
    });
  } catch (error) {
    console.error(error);
  }
};
