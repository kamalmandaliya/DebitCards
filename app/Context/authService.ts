const signIn = async (email, password) => {
  try {
    const response = true;
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUp = async (username, password) => {
  try {
    const response = true;
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmSignUp = async (email, code) => {
  try {
    const response = true;
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signOut = async () => {
  try {
    const response = true;
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const checkAuth = async () => {
  try {
    const attributes = [''];
    let userData = '';
    let jwtTo = null;
    if (userData) {
      let userDatum = {token: ''};
      userDatum = JSON.parse(userData);
      jwtTo = userDatum.token;
    }
    return {attributes, jwtToken: jwtTo};
  } catch (error) {
    throw new Error(error.message);
  }
};

export {signIn, signOut, checkAuth, signUp, confirmSignUp};
