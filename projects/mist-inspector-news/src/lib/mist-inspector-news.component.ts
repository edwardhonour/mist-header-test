import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MistDataServiceService } from 'projects/mist-data-service/src/lib/mist-data-service.service';

@Component({
  selector: 'lib-mist-inspector-news',
  template: `
<div class="container-fluid mt-2">
<div class="row mt-3">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-heading ms-3 mt-3 mb-0">
                <h3 style="font-size: 18px;">News Feed</h3>
            </div>
            <div class="card-body" style="min-height: 900px;">
<div class="row">
        <table class="table table-striped table-condensed">
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr *ngFor="let m of news" [ngStyle]="{'background-color':m.COLOR === 'RED' ? '#f2dede' : '#ffffff' }">
                    <td (click)="gotoNews(m.FSA);" style="font-size:12px;" [innerHtml]=m.POST></td>
                    <td (click)="deleteNews(m.POST_ID);" style="width:40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg></td>

                </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <button (click)="deleteAllNews();" class="btn btn-dark">Delete All News</button>
        </div>
    </div>
          </div>      
    </div>
    </div>
</div>
</div>
  `,
  styles: [
  ]
})

export class MistInspectorNewsComponent implements OnInit, OnChanges {

  constructor(private _dataService:MistDataServiceService) { }
  news: any;

  ngOnInit(): void {
     this.getNewsfeed();
  }

  ngOnChanges() {
       this.getNewsfeed();
  }

  @Output() newFeed: EventEmitter<any> = new EventEmitter<any>();

  getNewsfeed() {
      this._dataService.postNothing("get-newsfeed").subscribe((data:any)=>{
        this.news=data;
      });
  }  

  deleteNews(i: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this._dataService.postForm("delete-news",i).subscribe((data:any)=>{
        this.news=data;
      });
    }
  }

  deleteAllNews() {
    let i: any = {}
    if (confirm('Are you sure you want to delete your entire newsfeed?')) {
    this._dataService.postForm("delete-allnews",i).subscribe((data:any)=>{
      this.news=data;
    });
  }
  }

  gotoNews(i: any) {
      this.newFeed.emit(i);
  }
}
