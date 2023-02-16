import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'lib-mist-page-header',
  template: `
<div class="container-fluid">
    <header class="row banner">
        <div class="col-md-1 logo">
            <a href="#maincontent"><img alt="Skip to Main Content" src="assets/spacer.gif" height="100" width="1" border="0" class="pull-left"/></a>
                  <img src="assets/seal_DHS.png" alt="US Department of Homeland Security Seal" width="80" height="70" class="pull-left">
                  <div class="pull-left"></div>
        </div>
        <div class="col-md-11">
            <div class="sitetitle"><font color=#FFFFFF>FPS Gateway - MIST 2.0</font></div>
            <span class="fpstitle">Department of Homeland Security</span>
        </div>
    </header>
    <nav  class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid"  style="width:100%">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav" style="width: 100%">
            <ul class="navbar-nav">
            <li>PAGE IS {{ page }}</li>
              <li  class="nav-item ms-3 me-2"*ngIf="page!='1'" class="nav-item ms-3 me-2" style="color:white; cursor: pointer"><a class="nav-link active" (click)="gotoMIST('today.asp');"  style="color:white">Home</a></li>
              <li class="nav-item ms-3 me-2" style="cursor: pointer"><a class="nav-link active" (click)="gotoMIST('rwh001.php');" style="color:wheat">Data Analysis</a></li>
              <li class="nav-item ms-3 me-2" style="cursor: pointer"><a class="nav-link active" (click)="gotoMIST('facility.asp');" style="color:wheat">Manage Facilities</a></li>
              <li class="nav-item ms-3 me-2" style="cursor: arrow"><a class="nav-link active"  (click)="gotoMIST('users.asp');" style="color:wheat">Manage Users</a></li>
              <li class="nav-item ms-3 me-2" style="cursor: arrow"><a class="nav-link active"  style="color:wheat" (click)="gotoMIST('tickets.asp');">TSD </a></li>
              <li class="nav-item ms-3 me-2" style="cursor: arrow"><a class="nav-link active"  style="color:wheat" href="#">&nbsp; &nbsp; &nbsp; </a></li>
              <li class="nav-item ms-3 me-2"><a class="nav-link active" href="#">&nbsp; </a></li>
              <li class="nav-item ms-3 me-2"><a class="nav-link active"  style="color:whitesmoke"  href="#">Logged in as: {{ username }} ({{ role }})</a></li> 
              <li class="nav-item ms-3 me-2"><a class="nav-link active" href="#">&nbsp; </a></li>
              <li class="nav-item ms-3 me-2"  style="cursor: arrow"><a class="nav-link active" (click)="gotoMIST('helpdocs.asp');" style="color:wheat">Help Docs</a></li>                    
              <li class="nav-item ms-3 me-2"  style="cursor: arrow"><a class="nav-link active" (click)="gotoMIST('account.asp');" style="color:wheat">My Activities</a></li>                    
              <li class="nav-item ms-3 me-2"  style="cursor: arrow"><a class="nav-link active" (click)="gotoMIST('common/clear_cookies_logout.asp');" style="color:wheat">Logout</a></li>      
            </ul>
          </div>
        </div>
      </nav>
  </div>
  `,
  styles: [
  ]
})
export class MistPageHeaderComponent implements OnInit {

  @Input() user: any;
  @Input() page: any;
  loading: string='';
  username: string='';
  role: string='';
  url: any;

  constructor() { }

  ngOnInit(): void {
  }

  leavePage() {
    this.leavingPage.emit('GOING');
}

ngOnChanges() {
  console.log('ngOnChanges')
  console.log(this.user);
  if (this.user!==undefined) {
    this.username = this.user.USER_NAME;
    this.role = this.user.ROLE;
  }

}

@Output() 
leavingPage: EventEmitter<string> = new EventEmitter<string>();

doMIST() {
  this.url = new URL(window.location.href);
  const baseUrl = this.url.origin;
  location.href = baseUrl + '/' + this.page;
}

gotoMIST(p: any) {
  this.loading='Y';
  this.url = new URL(window.location.href);
  const baseUrl = this.url.origin;
  location.href = baseUrl + '/' + p;
  //this.leavingPage.emit('Y');
  //setTimeout(this.doMIST, 500); 
}

}
