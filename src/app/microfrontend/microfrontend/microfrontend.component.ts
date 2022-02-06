import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.scss']
})
export class MicrofrontendComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
     let value = sessionStorage.getItem('hostValue');
     console.log(value);
     sessionStorage.setItem('valor desde mi otro pc','Hola Mundo')
     
  }

}
