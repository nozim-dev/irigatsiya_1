import axios from "axios";
export const BASE_URL = "https://a8ae-195-158-14-126.ngrok-free.app";
const AxiosCall = async (method, url, params) => {
    try {
        // create a new object with the header
        const config = {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        };
        // merge the config object with the params object
        const options = Object.assign({}, config, params);
        // make the axios call with the options object
        const response = await axios[method](`${BASE_URL}${url}`, options);
        return response.data;
    }
    catch (error) { throw error; };
};
export default AxiosCall;