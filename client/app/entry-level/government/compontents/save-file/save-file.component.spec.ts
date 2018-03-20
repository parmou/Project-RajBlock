import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFileComponent } from './save-file.component';

describe('SaveFileComponent', () => {
  let component: SaveFileComponent;
  let fixture: ComponentFixture<SaveFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
