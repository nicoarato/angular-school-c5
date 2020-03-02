import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from 'src/app/contact.model';
import { ContactsService } from '../../contacts.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public model: Contact = new Contact(0, '', null, []);
  public readonly phoneTypes: string[] = Object.values(PhoneType);


  constructor( private _contact: ContactsService) { }

  ngOnInit() {
  }

  addContact() {
    this._contact.addContact(this.model);
    this.model = new Contact(0, '', null, []);
  }

  addNewPhoneToModel() {
    this.model.phones.push({type: null, number: null});
  }

}
