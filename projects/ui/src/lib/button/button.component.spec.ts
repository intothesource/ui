import { async, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Button', () => {

  describe('On `<button>` element', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonTestComponent, ButtonComponent],
      });

      TestBed.compileComponents();
    }));

    it('should create on button', () => {
      const fixture = TestBed.createComponent(ButtonTestComponent);
      const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(buttonDebugElement).toBeTruthy();
    });

    it('should add `its-button` class to `<button>` element', () => {
      const fixture = TestBed.createComponent(ButtonTestComponent);
      const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
    });
  });

  describe('On `<a>` element', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AnchorTestComponent, ButtonComponent],
      });

      TestBed.compileComponents();
    }));

    it('should create on anchor', () => {
      const fixture = TestBed.createComponent(AnchorTestComponent);
      const aDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(aDebugElement).toBeTruthy();
    });

    it('should add `its-button` class to `<a>` element', () => {
      const fixture = TestBed.createComponent(AnchorTestComponent);
      const aDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(aDebugElement.nativeElement.classList).toContain('its-button');
    });
  });

  describe('With variant', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [WithColorTestComponent, ButtonComponent],
      });

      TestBed.compileComponents();
    }));

    it('should add `its-button--color-primary` class to `[color="primary"]` element', () => {
      const fixture = TestBed.createComponent(WithColorTestComponent);
      const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList).toContain('its-button--color-primary');
    });
  });

  describe('With outline', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [WithOutlineTestComponent, ButtonComponent],
      });

      TestBed.compileComponents();
    }));

    it('should add `its-button--outline` class to `[[outline]="true"]` element', () => {
      const fixture = TestBed.createComponent(WithOutlineTestComponent);
      const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList).toContain('its-button--outline');
    });
  });

  describe('With outline and color', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [WithOutlineAndColorTestComponent, ButtonComponent],
      });

      TestBed.compileComponents();
    }));

    it('should add `its-button--outline` class to `[[outline]="true"]` element', () => {
      const fixture = TestBed.createComponent(WithOutlineAndColorTestComponent);
      const buttonDebugElement = fixture.debugElement.query(By.directive(ButtonComponent));

      fixture.detectChanges();
      expect(buttonDebugElement.nativeElement.classList).toContain('its-button--outline');
      expect(buttonDebugElement.nativeElement.classList).toContain('its-button--color-primary');
    });
  });

});

@Component({
  template: `<button its-button>Foo</button>`
})
class ButtonTestComponent { }

@Component({
  template: `<a its-button>Foo</a>`
})
class AnchorTestComponent { }

@Component({
  template: `<button its-button color="primary">Foo</button>`
})
class WithColorTestComponent { }

@Component({
  template: `<button its-button [outline]="true">Foo</button>`
})
class WithOutlineTestComponent { }

@Component({
  template: `<button its-button color="primary" [outline]="true">Chef</button>`
})
class WithOutlineAndColorTestComponent { }
