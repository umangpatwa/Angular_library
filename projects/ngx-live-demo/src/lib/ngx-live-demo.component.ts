import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-live-demo',
  template: `
    <p>
      ngx-live-demo works!
    </p>
  `,
  styles: [
  ]
})
export class NgxLiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("I am working")
    localStorage.setItem("test", "value")
  }

}
