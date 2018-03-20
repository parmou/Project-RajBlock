import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
const URL = 'http://localhost:8000/uploadFile';

@Component({
  selector: 'app-save-file',
  templateUrl: './save-file.component.html',
  styleUrls: ['./save-file.component.css']
})
export class SaveFileComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    title = 'app works!';

    ngOnInit() {
      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    }
    constructor(private http: Http, private el: ElementRef) {

    }
    upload() {
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
      let inputE2: HTMLInputElement = this.el.nativeElement.querySelector('#mailID');
      let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
                formData.append('photo', inputEl.files.item(0));
                console.log("input val: "+inputE2.value);
                formData.append('emailID','x,nskjxnmlkklsmx');
            this.http.post(URL, formData).map((res:Response) => res.json()).subscribe(
                 (success) => {
                         alert(success._body);
                },
                (error) => alert(error))
          }
       }

}
