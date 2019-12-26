import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogComponent} from './dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        {provide: MatDialog, useValue: matDialogSpy},
        {provide: MatDialogRef, useValue: mockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dialog element should have button and text', () => {
    const dialogElement: HTMLElement = fixture.nativeElement;
    const h1Element = dialogElement.querySelector('h1');
    const button = dialogElement.querySelector('#okay-button');
    expect(h1Element).toBeDefined();
    expect(button.innerHTML).toContain('Okay');
  });

  it('onNoClick should close the dialog', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

});
