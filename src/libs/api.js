import axios from "axios";

export const client = axios.create({
  baseURL: "https://asia-northeast3-wesopt29-4788e.cloudfunctions.net/",
  headers: {
    "Content-Type": "application/json",
  },
});
