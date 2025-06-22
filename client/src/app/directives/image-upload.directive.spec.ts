import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageUploadDirective } from './image-upload.directive';

describe('ImageUploadDirective', () => {
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });

    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create an instance', () => {
    const directive = new ImageUploadDirective(sanitizer);
    expect(directive).toBeTruthy();
  });
});
