"use server";

import axios from "axios";
import { error } from "console";

export async function updatePlayer({ data }) {
  const playersData = {
    id: data?.id,
    ...(data.display_name && { display_name: data?.name }),
    ...(data.avatar && { avatar: data?.avatar }),
    ...(data.country && { country: data?.country }),
  };

  try {
    const res = axios.patch(
      "https://game-be-15.onrender.com/api/v1/players/update",
      {
        playersData,
      },
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: data.token,
        },
      }
    );
    return { success: res.data.message };
  } catch (error) {
    return { error: error.response.message };
  }
}
