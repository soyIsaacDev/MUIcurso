import { userFetch } from "../constants";

export const getGitHubUser = async(user) => {
    const response = await fetch(userFetch+"/"+user, {
        method:"GET"
    });
    const payload = response.json();
    return payload;
};
