import { IDataApi } from "./IDataApi";

export class DataApi implements IDataApi {
    getAllMovies(): Promise<any> {
        return new Promise((resolve, reject) => {
            var xhttp = new XMLHttpRequest();
            var url = "https://localhost:44395/moviedata";
            xhttp.open("GET", url);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            xhttp.send();
        });
    }
}