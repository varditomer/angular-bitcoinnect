import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact | null

  getInitials(): string | undefined {
    const name = this.contact?.name
    return name?.split(' ').reduce((initials:string, word:string, idx:number) => {
      if (idx > 1) return initials
      return initials += word[0]
    }, '')
  }

}
