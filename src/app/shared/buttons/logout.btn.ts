import { Component } from "@angular/core";

@Component({
    selector : 'logout-btn',
    template : ` <button mat-raised-button>Logout</button>`,
    styles : `button{font-size : 12px;padding : 5px 10px; font-weight : bold;}`
})
export class LogoutBtn{}