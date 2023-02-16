import { Component } from '@angular/core';

@Component({
  selector: 'lib-mist-page-footer',
  template: `
<footer>
<br>
<font color="white" size="2">Plugin Links:
 <a style="color: white; text-decoration: underline;" href="http://get.adobe.com/flashplayer/">Adobe Flash</a>
 | <a style="color: white; text-decoration: underline;" href="http://get.adobe.com/reader/">Adobe Reader</a>
 | <a style="color: white; text-decoration: underline;" href="http://www.microsoft.com/en-us/download/">Microsoft Word</a>
 | <a style="color: white; text-decoration: underline;" href="http://www.microsoft.com/en-us/download/">Microsoft Excel</a>
</font>
</footer>
  `,
  styles: [
  ]
})
export class MistPageFooterComponent {

}
