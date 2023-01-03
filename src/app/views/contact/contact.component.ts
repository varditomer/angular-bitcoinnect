import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private contactService: ContactService) { }
  contacts$!: Observable<Contact[]>


  ngOnInit(): void {
    this.contactService.loadContacts({term:''})
    this.contacts$ = this.contactService.contacts$
  }
  


}
