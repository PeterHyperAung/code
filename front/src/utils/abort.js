const api = "http://127.0.0.1:5000";
const post_api = "http://127.0.0.1:8000";
// const post_api = "https://may-may-tot-a-twat-node.onrender.com";
// const api =
//   "https://web-production-b39d.up.railway.app/https://may-may-tot-a-twat-flask.onrender.com";

export default async function abort() {
  const token = localStorage.getItem("may-may-site-token");
  const res = await fetch(`${post_api}/checkToken`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (await res.json()).msg;
}
