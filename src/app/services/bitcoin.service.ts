import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Timestamp } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class BitcoinService {
    constructor(private httpClient: HttpClient, private userService: UserService) { }
    user: User = this.userService.getUser()

    getRate(dollars = 1) {
        const BITCOIN_URL = `https://blockchain.info/tobtc?currency=USD&value=${dollars}`
        return this.httpClient.get(BITCOIN_URL)
            .pipe(
                map(bitRate => bitRate as string

                    // const rate = 1 / (bitRate as number)
                    // return rate.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                )
            )
    }
    getFixedRate(dollars = 1) {
        const BITCOIN_URL = `https://blockchain.info/tobtc?currency=USD&value=${dollars}`
        return this.httpClient.get(BITCOIN_URL)
            .pipe(
                map(bitRate => {
                    const rate = 1 / (bitRate as number)
                    return rate.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                })

            )
    }
    getUsdBalance(coins: number) {
        const BITCOIN_URL = `https://blockchain.info/tobtc?currency=USD&value=1`
        return this.httpClient.get(BITCOIN_URL)
            .pipe(
                map(bitRate => {
                    const usdB = coins / (bitRate as number)
                    return usdB.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

                })
            )
    }
    getMarketPrice(time = 'months', count = 5) {
        const MARKET_PRICE_URL = `https://api.blockchain.info/charts/market-price?timespan=${count}${time}&format=json&cors=true`
        return this.httpClient.get(MARKET_PRICE_URL)
            .pipe(
                map(res => res)
            )
    }
    getConfirmedTransactions(time = 'months', count = 5) {
        const CONFIRMED_TRANSACTIONS_URL = `https://api.blockchain.info/charts/n-transactions?timespan=${count}${time}&format=json&cors=true`
        return this.httpClient.get<{ values: [{ x: number, y: number }] }>(CONFIRMED_TRANSACTIONS_URL)
            .pipe(
                map(res => res)
            )
    }
}
