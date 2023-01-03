import { Component} from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  constructor(private bitcoinService: BitcoinService) { }

  data$!: Observable<Row[]> | any
  marketPrice$!: any
  marketPriceData: any
  objData: any
  title: any
  chartType: ChartType = ChartType.AreaChart
  
  data1$!: Observable<Row[]> | any
  confirmedTransactions$!: any
  confirmedTransactionsData: any
  objData1: any
  title1: any


  subscription!: Subscription

  ngOnInit(): void {

    this.marketPrice$ = this.bitcoinService.getMarketPrice()
    this.subscription = this.marketPrice$.subscribe((marketPrice: any) => {
      this.title = marketPrice.name + ': ' + marketPrice.description
      this.objData = marketPrice.values

      const data = this.objData.map((coords: { x: any; y: any; }) => {
        const arr = []
        coords.x = new Date(coords.x * 1000).toLocaleDateString()
        arr.push(coords.x)
        arr.push(coords.y)
        return arr
      })
      this.marketPriceData = data
    })

    this.confirmedTransactions$ = this.bitcoinService.getConfirmedTransactions()
    this.subscription = this.confirmedTransactions$.subscribe((confirmedTransactions: any) => {
      this.title1 = confirmedTransactions.name + ': ' + confirmedTransactions.description
      this.objData1 = confirmedTransactions.values
      
      const data = this.objData1.map((coords: { x: any; y: any; }) => {
        const arr = []
        coords.x = new Date(coords.x * 1000).toLocaleDateString()
        arr.push(coords.x)
        arr.push(coords.y)
        return arr
      })
      this.confirmedTransactionsData = data
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }


}
