import { IUser } from "../types";

export const getRandomUser = async (
  baseUrl: string,
  userEdnpoint: string,
  id: number
): Promise<IUser | null> => {
  try {
    const response = await fetch(`${baseUrl}/${userEdnpoint}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.status}`);
    }
    console.log(response);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("User not fetched", error);
    return null;
  }
};
