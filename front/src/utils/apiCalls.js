const api = "http://127.0.0.1:5000";
const post_api = "http://127.0.0.1:8000";
// const post_api = "https://may-may-tot-a-twat-node.onrender.com";
// const api =
//   "https://web-production-b39d.up.railway.app/https://may-may-tot-a-twat-flask.onrender.com";

export function getToken() {
  return localStorage.getItem("may-may-site-token");
}

export async function createUser(data) {
  const res = await fetch(`${api}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result;
}

export async function confirmUser(id) {
  const res = await fetch(`${api}/confirmMail/${id}`);
  return await res.json();
}

export async function loginUser(email, password) {
  const res = await fetch(`${api}/login/${email}/${password}`);
  return await res.json();
}

export async function createPost(title, body) {
  const token = getToken();
  let res;
  try {
    res = await fetch(`${post_api}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, created: Date.now() }),
    });
  } catch (e) {
    return false;
  }

  if (!res.ok) return false;
  return true;
}

export async function getPosts() {
  const token = getToken();
  const res = await fetch(`${post_api}/posts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export async function getPost(id) {
  const token = getToken();
  const res = await fetch(`${post_api}/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

export async function addComment(data, id) {
  const token = getToken();

  const res = await fetch(`${post_api}/posts/${id}/comments`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) return false;

  return await res.json();
}

export async function likePost(id) {
  const token = getToken();

  const res = await fetch(`${post_api}/posts/${id}/likes`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return false;

  return await res.json();
}

export async function sendMail(data) {
  const res = await fetch(`${api}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
