import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact.model';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public model:Contact = new Contact(0, '');
  
  constructor() { }

  ngOnInit() {
  }

}
