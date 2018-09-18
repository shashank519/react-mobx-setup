import { observable } from "mobx";

const headers = {
  Accept: "application/json",
  "Content-type": "application/json"
};

class MasterService {
  @observable
  // commonUrl = "http://localhost:8081";
  commonUrl = "http://192.168.1.55:8081";

  get = url => {
    return new Promise((resolve, reject) => {
      fetch(`${this.commonUrl}/${url}`)
        .then(res => {
          return res.json();
        })
        .then(res => resolve(res))
        .catch(error => {
          reject(error);
        });
    });
  };

  post = (url, data) => {
    return fetch(`${this.commonUrl}/${url}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      });
  };
  put = (url, data) => {
    return fetch(`${this.commonUrl}/${url}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(function(error) {
        return error;
      });
  };

  delete = url => {
    return fetch(`${this.commonUrl}/${url}`, {
      headers: headers,
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(function(error) {
        return error;
      });
  };
}

export default new MasterService();
