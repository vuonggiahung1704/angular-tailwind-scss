import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDocumentComponent } from './ai-document.component';

describe('AiDocumentComponent', () => {
  let component: AiDocumentComponent;
  let fixture: ComponentFixture<AiDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
