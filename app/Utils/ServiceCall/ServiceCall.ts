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
const ServiceCall = async function (Service) {
  let token = '';
  let data: HeaderData;
  data.method = Service.methodType;
  if (
    !Service.headers ||
    Service.headers == undefined ||
    Service.headers == null
  ) {
    data.headers = {
      'Content-Type': 'application/json',
      token: token,
    };
  } else {
    data['headers'] = Service['headers'];
    console.log(data.headers);
    data.headers.token = token;
  }
  if (data.method.toLowerCase() == 'post') {
    data.body = Service.bodyData;
  }
  console.log(Service);
  console.log(data);
  return new Promise(resolve => {
    try {
      NetInfo.fetch().then(state => {
        if (state.isConnected == true) {
          if (state.isInternetReachable == true) {
            fetch(Service.apiUrl, data)
              .then(response => {
                console.log(response);
                const statusCode = response.status;
                if (statusCode == 200) {
                  const data = response.json();
                  return Promise.resolve(data);
                } else {
                  console.log(response);
                  var datum: StatusResponseData;
                  datum.message = 'Unable to connect server';
                  datum.status = false;
                  datum.failure = true;
                  const data = datum;
                  return data;
                }
              })
              .then(responseJson => {
                if (!responseJson.failure) {
                  resolve(Service.onSuccessCall(responseJson));
                } else {
                  resolve(Service.onFailureAPI(responseJson));
                }
              })
              .catch(error => {
                resolve(Service.onFailureAPI(error));
              });
          } else {
            resolve(Service.onOffline('NetNotReachable'));
          }
        } else {
          resolve(Service.onOffline('NotConnected'));
        }
      });
    } catch (e) {
      resolve(Service.onPromiseFailure(e));
    }
  });
};
export default ServiceCall;
