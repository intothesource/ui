import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ComponentFactory, Injector, ComponentFactoryResolver } from '@angular/core';
import { createComponentWithContents } from '../../util/create-component-with-contents';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let factory: ComponentFactory<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    const resolver = TestBed.get(ComponentFactoryResolver, null) as ComponentFactoryResolver;
    factory = resolver.resolveComponentFactory(ButtonComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should transclude the provided nodes into the button', () => {
  //   const tnode = document.createTextNode('Foo bar');
  //   const componentRef = factory.create(Injector.NULL, [[tnode]]);
  //   const button = componentRef.location.nativeElement;
  //   expect(button.textContent).toBe('Foo bar');
  // });

  // it('should transclude the provided nested element nodes into the button', () => {
  //   const componentRef = createComponentWithContents(factory, '<div>Foo Bar</div>');
  //   const div = fixture.debugElement.query(By.css('div'))
  //   expect(div).toBeTruthy();
  // });

  // it('should transclude the provided nested text nodes into the button', () => {
  //   const componentRef = createComponentWithContents(factory, '<div>Foo Bar</div>');
  //   const button = componentRef.location.nativeElement;
  //   expect(button.children[0].textContent).toBe('Foo Bar');
  // });

});
