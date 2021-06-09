import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefferenceVariableComponent } from './template-refference-variable.component';

describe('TemplateRefferenceVariableComponent', () => {
  let component: TemplateRefferenceVariableComponent;
  let fixture: ComponentFixture<TemplateRefferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefferenceVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
