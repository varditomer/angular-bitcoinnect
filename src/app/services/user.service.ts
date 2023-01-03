import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';


@Injectable({ providedIn: 'root' })
export class UserService {
    private USER_STORAGE_KEY = 'user'
    private DEFAULT_USER: User = { name: "Ochoa Hyde", coins: 100, moves: [] }

    constructor(private storageService: StorageService) { }
    getUser(): User {
        let user: User | null = this.storageService.load(this.USER_STORAGE_KEY)
        if (!user) user = this.DEFAULT_USER
        this.storageService.save(this.USER_STORAGE_KEY, user)
        return user
    }
    signup(name:string) {
        const user: User = { name: name, coins: 100, moves: [] }
        this.storageService.save(this.USER_STORAGE_KEY, user)
    }
    logout() {
        this.storageService.save(this.USER_STORAGE_KEY, null)
    }
    isLoggedinUserExist(): boolean {
        let user: User | null = this.storageService.load(this.USER_STORAGE_KEY)
        if (!user) return false
        return true
    }
    addMove(contact:Contact, amount:number) {
        console.log(`amount:`, amount)
        const loggedinUser = this.getUser()
        const balance = loggedinUser.coins
    
        if (amount > balance) return null
    
        const move: Move = {
            _id: this._getRandomId(4),
            toId: contact._id || '',
            to: contact.name,
            at: Date.now(),
            amount,
        }
    
        loggedinUser.coins -= amount
        loggedinUser.moves.push(move)
        this.storageService.save(this.USER_STORAGE_KEY, loggedinUser)
        return loggedinUser
    }
    _getRandomId(length = 8): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                characters.length));
        }
        return result;
    }

}