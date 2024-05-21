"use server";

import { RegisterSchema } from "@/lib/schemas";
import axios from "axios";

export const register = async (values) => {
  const validatedvalues = RegisterSchema.safeParse(values);
  try {
    const res = await axios.post(
      "https://game-be-15.onrender.com/api/v1/players/register",
      {
        
        email: validatedvalues.data.email,
        display_name: validatedvalues.data.display_name,
        password: validatedvalues.data.password,
        country: validatedvalues.data.country,
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );

    return { success: res.data.message };

  } catch (error) {
    
    return { error: error.response.data.message };
  }
  
    
  
    // console.log(res.data);
    // if (!res.data) {

    //   
    // }
    // 
  

  
};
