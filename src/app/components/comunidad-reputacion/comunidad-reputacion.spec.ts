import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunidadReputacion } from './comunidad-reputacion';

describe('ComunidadReputacion', () => {
  let component: ComunidadReputacion;
  let fixture: ComponentFixture<ComunidadReputacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunidadReputacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ComunidadReputacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
