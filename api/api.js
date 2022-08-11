export const API_END_POINT = "API END POINT";

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }

  throw new Error("요청에 실패함");
};

const getDemoData = async (keyword) => {
  const languages = ["js", "ts", "javascript", "typescript"];

  return languages.filter((v) => v.includes(keyword));
};

const fetchLanguages = async (keyword) =>
  request(`${API_END_POINT}/?keyword=${keyword}`);
export const fetchDemoData = async (keyword) => await getDemoData(keyword);
