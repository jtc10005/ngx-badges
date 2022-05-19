### ngx-badges
___
Simple badge module for Angular 2.
### There are several different badge stylings:
<ul>
<li>primary</li>
<li>error</li>
<li>info</li>
<li>warn</li>
<li>success</li>
<li>default</li>
</ul>

<img src='./images/sampleImage.PNG' />

### How to use:
From NPM run: `npm i ngx-badges --save`   
Add to your module imports. Ex...

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBadgesModule } from 'projects/ngx-badges/src/public-api';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxBadgesModule
  ],
```

Add to component HTML: 

```
PRIMARY: <ngx-badges text="PRIMARY" type="PRIMARY"></ngx-badges>
SUCCESS: <ngx-badges text="SUCCESS" type="SUCCESS"></ngx-badges>
WARN: <ngx-badges text="WARN" type="WARN"></ngx-badges>
ERROR: <ngx-badges text="ERROR" type="ERROR"></ngx-badges>
INFO: <ngx-badges text="INFO" type="INFO"></ngx-badges>
DEFAULT: <ngx-badges text="DEFAULT" type="DEFAULT"></ngx-badges>
``` 


text is the text to appear in the badge.
type is the stylings to be applied to the badge.

