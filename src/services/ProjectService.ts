import {resolve} from "dns";

export class ProjectService {
  private apiUrl
  private apiKey

  constructor() {
    this.apiUrl = process.env.API_URL
    console.log(this.apiUrl);
    this.apiKey = "valid-key";
  }

  public getProjects() {
    return fetch("http://18.176.182.49:8080/api/getAllBlockLists", {
      headers: {
        "api-key": this.apiKey,
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
          "api-key": this.apiKey,
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
  public verifiedProject(id: string) {
    return fetch(`http://18.176.182.49:8080/api/project/verify`, {
      headers: {
        "api-key": this.apiKey,
        mode: 'cors',
      },
      method: "POST",
      body: JSON.stringify({
        uuid: id,
      }),
    }).then((response) => {
      return response.json();
    })
  }
  public blockProject(id: string) {
    return fetch(`http://18.176.182.49:8080/api/project/block`, {
      headers: {
        "api-key": this.apiKey,
        mode: 'cors',
      },
      method: "POST",
      body: JSON.stringify({
        uuid: id,
      }),
    }).then((response) => {
      return response.json();
    })
  }
}
