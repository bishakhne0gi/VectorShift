import { BASE_URL } from "./api.config";
import ky from "ky";

export const client = ky.create({
  prefixUrl: `${BASE_URL}/`,
});
