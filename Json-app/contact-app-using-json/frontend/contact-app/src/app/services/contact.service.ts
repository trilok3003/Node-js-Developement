import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private router: Router, private http: HttpClient) {}
  uri = "http://localhost:8080";
  contactdetails: any;
  // getting contacts data from backend
  getContacts() {
    return this.http.get(`${this.uri}/contactlist`);
  }

  contactDetails(details) {
    this.contactdetails = details;
  }

  showDetails() {
    return this.contactdetails;
  }
  // sending contact details with otp to backend
  sendMessage(values) {
    return this.http.put(`${this.uri}/sendOTP`, values);
  }
  // getting messages list form backend
  getMessagesList() {
    return this.http.get(`${this.uri}/sentmessageslist`);
  }
}
