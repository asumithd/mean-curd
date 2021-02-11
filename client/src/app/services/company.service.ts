import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  URL_API = 'http://localhost:4000/api/companys'
  selectedCompany: Company = {
    first_name: '',
    company_name: '',
    email: '',
    phone: '',
    description: ''
  };
  company: Company[];

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get<Company[]>(this.URL_API);
  }
  createCompany(company: Company) {
    return this.http.post(this.URL_API, company);
  }
  deleteCompany(id: string) {
    return this.http.delete(this.URL_API + '/' + id);
  }
  editCompany(company: Company) {
    return this.http.put(this.URL_API + '/' + company._id , company);
  }
  bulk(company: Company) {
    return this.http.post(this.URL_API + '/test', company);
  }
}
