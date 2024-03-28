export const saveLoginToken = (data) => {
    localStorage.setItem("organisationId", data.organisationId)
    localStorage.setItem("organisationName", data.organisationName)
    localStorage.setItem("subDomine", data.subDomine)
    localStorage.setItem("userName", data.userName)
}

export const getToken = () => {
    return localStorage.getItem("authToken");
}

export const getOrganisationName = () => {
    return localStorage.getItem("subDomine");
}

export const clearLocalStorage = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
}