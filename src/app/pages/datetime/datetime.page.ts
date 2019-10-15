import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.page.html',
    styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

    fechaNacimiento: Date = new Date();
    customPickerOptions;
    customDate;

    constructor() {
    }

    ngOnInit() {
        this.customPickerOptions = {
            buttons: [{
                text: 'Save',
                handler: (evento) => {
                    console.log('Clicked Save!');
                    console.log(evento);
                }
            }, {
                text: 'Log',
                handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return false;
                }
            }]
        };
    }

    cambioFecha(event) {
        console.log(event);
        console.log('Date', new Date(event.detail.value));
    }

}
