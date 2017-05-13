import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHeadComponent } from './banner-head.component';

describe('BannerHeadComponent', () => {
  let component: BannerHeadComponent;
  let fixture: ComponentFixture<BannerHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
