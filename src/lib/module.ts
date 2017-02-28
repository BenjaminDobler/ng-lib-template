import {NgModule, ModuleWithProviders} from '@angular/core';


import {BdButtonModule} from './button/index';


const MATERIAL_MODULES = [
  BdButtonModule
];

@NgModule({
  imports: [
    BdButtonModule.forRoot(),
  ],
  exports: MATERIAL_MODULES,
})
export class MaterialRootModule { }


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {
  /** @deprecated */
  static forRoot(): ModuleWithProviders {
    return {ngModule: MaterialRootModule};
  }
}
