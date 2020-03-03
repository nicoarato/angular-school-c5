import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact, PhoneType } from 'src/app/contact.model';
import { ContactsService } from '../../contacts.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public model: Contact = new Contact(0, '', 'assets/default-user.png', []);
  public readonly phoneTypes: string[] = Object.values(PhoneType);
  @ViewChild('contactForm', {static: true}) contactForm: NgForm;

  constructor( private _contact: ContactsService) { }

  ngOnInit() {
  }

  addContact() {
    this._contact.addContact(this.model);
    this.model = new Contact(0, '', 'assets/default-user.png', []);
    this.contactForm.reset();
  }

  addNewPhoneToModel() {
    this.model.phones.push({type: null, number: null});
  }

  addImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      this.model.picture = <string>reader.result;
    }
  }

}
