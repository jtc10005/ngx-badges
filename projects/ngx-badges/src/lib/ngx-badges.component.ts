import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-badges',
  template: `
<span [class]="styleClass">{{text}}</span>
  `,
  styles: [`
    .badge-primary {
      background-color: #337ab7!important;
}
  .badge-error {
    background-color: #d9534f!important;
        }
        .badge-default {
  background-color: #777!important;
}
        .badge-info {
  background-color: #5bc0de!important;
}
        .badge-warning {
  background-color: #f0ad4e!important;
}
        .badge-success {
  background-color: #5cb85c!important;
}
        .badge {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75 %;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
  `]
})
export class NgxBadgesComponent implements OnInit {
  @Input() text: string = '';
  styleClass: string = 'badge';
  @Input() type: string = '';
  constructor() { }

  ngOnInit(): void {
    if (this.type) {
      if (this.type.toUpperCase().indexOf('SUCCESS') !=-1) { this.styleClass += ' badge-success'; }
      else if (this.type.toUpperCase().indexOf('ERROR') !=-1) { this.styleClass += ' badge-error'; }
      else if (this.type.toUpperCase().indexOf('INFO') !=-1) { this.styleClass += ' badge-info' }
      else if (this.type.toUpperCase().indexOf('PRIMARY') !=-1) { this.styleClass += ' badge-primary' }
      else if (this.type.toUpperCase().indexOf('DEFAULT') !=-1) { this.styleClass += ' badge-default' }
      else if (this.type.toUpperCase().indexOf('WARN') !=-1) { this.styleClass += ' badge-warning' }
      else { this.styleClass += ' badge-primary' }
    }
    else {
      this.styleClass += ' badge-default';
    }
  }

}
