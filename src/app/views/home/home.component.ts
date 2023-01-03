import { Component} from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }
  user: User = this.userService.getUser()
  loggedinUser: User = this.userService.getUser()
  bitRate$!: Observable<Object>
  usdBalance$!: Observable<Object>
  rate$!: Observable<Object>
  data$!: Observable<Row[]> | any
  data: any
  // rate: number = 0
  marketPrice$!: any
  myData: any
  objData: any
  title: any

  chartType: ChartType = ChartType.AreaChart

  subscription!: Subscription

  ngOnInit(): void {
    this.bitRate$ = this.bitcoinService.getFixedRate()
    this.marketPrice$ = this.bitcoinService.getMarketPrice()
    this.usdBalance$ = this.bitcoinService.getUsdBalance(this.user.coins)
    this.rate$ = this.bitcoinService.getFixedRate()
    this.subscription = this.marketPrice$.subscribe((marketPrice: any) => {

      this.title = marketPrice.name + ': ' + marketPrice.description
      this.objData = marketPrice.values
      this.data = this.data$

      const data = this.objData.map((coords: { x: any; y: any; }) => {
        const arr = []
        coords.x = new Date(coords.x * 1000).toLocaleDateString()
        arr.push(coords.x)
        arr.push(coords.y)
        return arr
      })
      this.myData = data
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }


}
