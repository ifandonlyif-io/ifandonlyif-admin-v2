import {resolve} from "dns";

export class ProjectService {
  private apiUrl

  constructor() {
    this.apiUrl = process.env.API_URL
    console.log(this.apiUrl);
  }

  public getProjects() {
    return fetch("http://18.176.182.49:8080/api/getAllBlockLists", {
      headers: {
        "api-key": "valid-key",
        mode: 'cors',
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return responseJson;
      });
  }
  public getProject(id: string) {
    return fetch(`http://18.176.182.49:8080/api/fetchBlockListById`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": "valid-key",
          mode: 'cors',
        },
        method: "POST",
        body: JSON.stringify({
          uuid: id,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          return jsonData
        })
        .catch((err) => {
          console.log("error:", err);
        })
    }
}
