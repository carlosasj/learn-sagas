const baseUrl = 'https://api.github.com';
const authorization = 'Basic Y2FybG9zYXNjaGpyOg==';


export async function searchUsers(username) {
    const response = await fetch(
        `${baseUrl}/search/users?q=${username}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization,
            }
        });
    return response.json();
}

export async function getRepos(username) {
    const response = await fetch(
        `${baseUrl}/users/${username}/repos`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization,
            }
        });
    return response.json();
}
