type FetchItemsResponse = {
  resource?: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
  success: boolean;
};

export const fetchItems = async (
  resourceUrl: string
): Promise<FetchItemsResponse> => {
  if (resourceUrl !== "users") {
    console.log("There is no such resource", resourceUrl);
    return { success: false };
  }
  try {
    const response = await fetch(`https://reqres.in/api/${resourceUrl}`);
    const jsonResponse = await response.json();
    const resource = jsonResponse.data;
    console.log("Success!");
    return { resource, success: true };
  } catch (error) {
    console.log("There was an error fetching resource", error);
    return { success: false };
  }
};
