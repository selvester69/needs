import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProduitModalComponent } from './delete-produit-modal.component';

describe('DeleteProduitModalComponent', () => {
  let component: DeleteProduitModalComponent;
  let fixture: ComponentFixture<DeleteProduitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProduitModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProduitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
