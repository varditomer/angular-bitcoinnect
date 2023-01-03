import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent {
  constructor(
    private contactService: ContactService,
  ) { }
  
  filterBy = { term: '' }
  
  onSetFilter() {
    this.contactService.loadContacts(this.filterBy)
  }

}
