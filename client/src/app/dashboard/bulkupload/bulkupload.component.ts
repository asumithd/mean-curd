import { CompanyService } from 'src/app/services/company.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {
  result: any;
  constructor(private CompanyService:CompanyService) { }

  ngOnInit(): void {
    this.CompanyService.getCompany().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
    // console.log(objectdata , 'object data');
  
  }
  data: AOA = [['first_name', 'company_name', 'email', 'phone', 'description'], ['test_name', 'company_test', 'test@gmail.com', '9940911317', 'test description']];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // this.data.map(res => {
      //   if (res[0] === "no") {
      //     console.log(res[0]);
      //   } else {
      //     console.log(res[0]);
      //   }
      // })

      this.data =  this.data.filter(d =>{ 
     return d.length > 0});
      console.log("data:", this.data);
      
      var array = this.data;

      var keys = array.shift();
      var objects = array.map(function (values) {
        return keys.reduce(function (o, k, i) {
          o[k] = values[i];
          return o;
        }, {});
      });
      
      this.result = objects
      console.log(this.result,'jjjj')
      this.CompanyService.bulk(this.result).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
      // console.log(objectdata , 'object data');
    };
    reader.readAsBinaryString(target.files[0]);
  }
  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}