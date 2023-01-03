import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }
  contact!: Contact | undefined

  subscription!: Subscription

  loggedinUser!: User


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      const contact = await lastValueFrom(this.contactService.getContactById(contactId))
      this.contact = contact
      this.loggedinUser = this.userService.getUser()
    })
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

  makeTransfer (amount:number) {
    if(this.contact) this.userService.addMove(this.contact, amount)
    window.location.reload();
}


}
