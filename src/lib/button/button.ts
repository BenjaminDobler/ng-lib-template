import {
    Component,
    ViewEncapsulation,
    Input,
    NgModule,
    ModuleWithProviders,
} from '@angular/core';
import {CommonModule} from '@angular/common';


/**
 * Material design button.
 */
@Component({
    moduleId: module.id,
    selector: 'bd-button',
    templateUrl: 'button.html',
    styleUrls: ['button.css'],
    encapsulation: ViewEncapsulation.None
})
export class BdButton {
    @Input()
    public label: string;
}


@NgModule({
    imports: [CommonModule],
    exports: [
        BdButton
    ],
    declarations: [
        BdButton
    ]
})
export class BdButtonModule {
    /** @deprecated */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BdButtonModule,
            providers: []
        };
    }
}
