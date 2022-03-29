import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  login = (data, setLoading = true) => {
    const uri = "nguoidung/facebook";
    return AxiosServ.postMethod(uri, data, setLoading);
  };
}

const httpServ = new HttpRequestService();

export default httpServ;
