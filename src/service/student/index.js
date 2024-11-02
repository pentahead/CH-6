export const getStudents = async (nickName) => {
  const token = localStorage.getItem("token");
  let params;
  if (nickName) {
    params.nick_name = nickName;
  }
  let url =
    `${process.env.REACT_APP_API_URL}/students` + new URLSearchParams(params);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  return result;
};
