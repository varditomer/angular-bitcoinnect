import { Component, Input } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent {
  constructor(
    private bitcoinService: BitcoinService
  ) { }
  @Input() loggedinUser!: User
  @Input() title!: string
  @Input() contact!: Contact | null

  bitRate$!: Observable<string>
  bitRate = ''

  async ngOnInit() {
    this.bitRate$ = this.bitcoinService.getRate()
    this.bitRate= await lastValueFrom(this.bitRate$)
    console.log(`this.bitRate:`, this.bitRate)
  }





}
