import http from "../http-common";

const get = (filter: string) => {
    return http.post("logs/get", filter)
}

const LogService = {
    get
};

export default LogService;