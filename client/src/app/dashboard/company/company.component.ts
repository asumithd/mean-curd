import { MessageService } from './../../services/message.service';
import { Company } from './../../models/company';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  emaillist: any[] = [];
  constructor(public companyService: CompanyService, private MessageS: MessageService) { }

  ngOnInit(): void {
    this.getCompany()
  }

  getCompany() {
    this.companyService.getCompany().subscribe(
      res => {
        this.companyService.company = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  getmail() {
    this.companyService.getCompany().subscribe(
      res => {
        res.forEach(element => {
          let name = element.email;
          this.emaillist = [...this.emaillist, name];
        });
        let email = this.emaillist;
        let reqobj = {
          email: email
        }
        this.MessageS.sendMessage(reqobj).subscribe(data => {
          console.log(data, 'maile');
        })
      }
      ,
      err => {
        console.log(err);
      }
    )
  }
  resetForm(form: NgForm) {
    form.reset();
  }
  addCompany(form: NgForm) {
    if (form.value._id) {
      this.companyService.editCompany(form.value).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }
    else 
    {
      this.companyService.createCompany(form.value).subscribe(
        res => {
          this.getCompany();
          form.reset();
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }

  }
  deleteCompany(id) {
    const res = confirm('Are you delete the record?');
    if (res) {
      this.companyService.deleteCompany(id)
        .subscribe(
          resp => {
            this.getCompany();
            console.log(resp);
          },
          err => {
            console.log(err);
          }
        )
    }
    console.log(res);
  }
  editCompany(company: Company) {
    this.companyService.selectedCompany = company;
  }


}
