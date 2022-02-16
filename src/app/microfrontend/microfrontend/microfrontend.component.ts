import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.scss']
})
export class MicrofrontendComponent implements OnInit {
  token: any = '';
  constructor() { 
  }

  ngOnInit(): void {
     let value = sessionStorage.getItem('hostValue');
     console.log(value);
     sessionStorage.setItem('valor desde mi otro pc','Hola Mundo')
     sessionStorage.setItem('adal.idtoken','hola')
     this.token = sessionStorage.getItem('adal.idtoken')
  }
  toggleDarkMode(evt:any) {
    
    if (evt.target.checked) {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
    } else {
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
    }
  }
}
