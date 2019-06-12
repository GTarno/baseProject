import { Component } from "@angular/core";

@Component({
    selector: 'app-listaSono',
    templateUrl: "./app-listaSono.component.html",
    styleUrls: ['app-listaSono.component.css']
})

export class AppListaSonoComponent {
    people: any[] = [
        {
            name: 'Giovanna',
            age: 21,
            level: 'P'
        },
        {
            name: 'Mara',
            age: 42,
            level: 'P'
        },
        {
            name: 'Felipe',
            age: 27,
            level: 'G'
        },
        {
            name: 'Fernanda',
            age: 21,
            level: 'M'
        },
        {
            name: 'Leticia',
            age: 23,
            level: 'G'
        },
        {
            name: 'Néia',
            age: 52,
            level: 'D'
        }
    ]
}
