import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { lastValueFrom, Observable, Subscription } from 'rxjs'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contact!: Contact

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      const contact = contactId ? await lastValueFrom(this.contactService.getContactById(contactId)) : new Contact
      this.contact = contact
    })
  }

  async onSaveContact() {
    console.log(`this.contact:`, this.contact)
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

  getInitials(): string | undefined {
    const name = this.contact?.name
    return name?.split(' ').reduce((initials: string, word: string, idx: number) => {
      if (idx > 1) return initials
      return initials += word[0]
    }, '')
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }
}