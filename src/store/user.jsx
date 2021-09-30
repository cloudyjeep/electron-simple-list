import { get, set, update } from "idb-keyval";

const USER = "@u";
const AUTHORIZED = "@a";

export const id = "id";
export const password = "password";
export const name = "name";
export const gender = "gender";
export const genderOptions = ["M", "F", "O"];

export const DESTROY_SESSION_USER = async () => {
  return await set(AUTHORIZED, null);
};

export const CHECK_SESSION_USER = async () => {
  await update(USER, (users) => users || []);
  return await get(AUTHORIZED);
};

export const VALIDATE_USER = async (user) => {
  const payload = await get(USER);
  console.log({ payload });
  for (let i = 0; i < payload.length; i++) {
    if (
      payload[i][id] === user[id] &&
      payload[i][password] === user[password]
    ) {
      await set(AUTHORIZED, { ...payload[i], [password]: undefined });
      return { done: true, data: payload[i] };
    }
  }
  return { done: false };
};

export const CREATE_USER = async (user) => {
  let newUser = {};
  for (const i in user) {
    newUser[i] = user[i].trim();
  }
  try {
    let done = true;
    let data = await update(USER, (payload) => {
      for (let i = 0; i < payload.length; i++) {
        if (payload[i][id] === newUser[id]) {
          done = false;
          return payload;
        }
      }
      return [...payload, user];
    });
    return { done, data };
  } catch (error) {
    console.log({ error });
    return { done: false };
  }
};
