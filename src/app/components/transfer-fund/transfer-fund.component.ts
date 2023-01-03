import { Component, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
  @Input() move!: Move
  @Input() bitRate!: any
  timeFormatter() {
    const timestamp = this.move.at
    const time = (new Date(timestamp)).toLocaleTimeString()
    const date = (new Date(timestamp)).toLocaleDateString()
    return `${date} , ${time}`
}

}
