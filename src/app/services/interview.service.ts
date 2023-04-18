import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Interview} from "../core/Model/Interview";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http:HttpClient) { }

  GetInterviews(){
    return this.http.get<Interview[]>(`${baseUrl}/interview/getAll`);
  }





}
