import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoApp, Home} from './demo-app/demo-app';
import {RouterModule} from '@angular/router';
import {
    MaterialModule
} from '@angular/material';
import {DEMO_APP_ROUTES} from './demo-app/routes';
import {ButtonDemo} from './button/button-demo';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(DEMO_APP_ROUTES),
        MaterialModule.forRoot()
    ],
    declarations: [
        ButtonDemo,
        DemoApp,
        Home
    ],
    providers: [],
    entryComponents: [
        DemoApp
    ],
})
export class DemoAppModule {
    constructor(private _appRef: ApplicationRef) {
    }

    ngDoBootstrap() {
        this._appRef.bootstrap(DemoApp);
    }
}
