import {async, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {BdButtonModule} from './button';



describe('BdButton', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BdButtonModule.forRoot()],
      declarations: [TestApp]
    });

    TestBed.compileComponents();
  }));

  // General button tests
  it('should apply class based on color attribute', () => {
    let fixture = TestBed.createComponent(TestApp);

    let testComponent = fixture.debugElement.componentInstance;
    let buttonDebugElement = fixture.debugElement.query(By.css('button'));
    let aDebugElement = fixture.debugElement.query(By.css('a'));

    testComponent.buttonColor = 'primary';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('mat-primary')).toBe(true);
    expect(aDebugElement.nativeElement.classList.contains('mat-primary')).toBe(true);

    testComponent.buttonColor = 'accent';
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('mat-accent')).toBe(true);
    expect(aDebugElement.nativeElement.classList.contains('mat-accent')).toBe(true);
  });


});

/** Test component that contains an MdButton. */
@Component({
  selector: 'test-app',
  template: `<bd-button [label]="label">`
})
class TestApp {

  public label:"Initial Label";
}
