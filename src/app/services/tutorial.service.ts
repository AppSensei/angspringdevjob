import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../Model/Book';

/*
const baseUrl = 'http://ec2-18-215-122-72.compute-1.amazonaws.com';
const baseUrl = 'http://ip-10-138-222-189.ec2.internal';
*/

const baseUrl = 'http://natty2020.us-east-1.elasticbeanstalk.com/api/tutorials';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get<Book>(`${baseUrl}?title=${title}`);
  }

}

