import NetInfo from '@react-native-community/netinfo';
interface HeaderData {
  method?: string;
  headers?: any;
  body?: any;
}
interface StatusResponseData {
  message: string;
  status: boolean;
  failure: boolean;
}
const ApiCall = async function (Service) {
  let data: HeaderData;
  let token = '';
  data.method = Service.methodType;
  data.headers = {'Content-Type': 'application/json', Authorization: token};
  if (data.method.toLowerCase() == 'post') {
    data.body = Service.bodyData;
  }
  try {
    const response = await fetch(Service.apiUrl, data);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
  try {
    await NetInfo.fetch().then(async state => {
      if (state.isConnected == true) {
        return await fetch(Service.apiUrl, data)
          .then(async response => {
            console.log(response);
            const statusCode = response.status;
            if (statusCode == 200) {
              const data = response.json();
              return Promise.resolve(data);
            } else {
              var datum:StatusResponseData;
              datum.message = 'Unable to connect server';
              datum.status = false;
              datum.failure = true;
              const data = datum;
              return data;
            }
          })
          .then(async responseJson => {
            console.log(responseJson);
            if (!responseJson.failure) {
              return responseJson;
            } else {
              return responseJson;
            }
          })
          .catch(error => {
            return error;
          });
      } else {
        return 'NotConnected';
      }
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};
export default ApiCall;
