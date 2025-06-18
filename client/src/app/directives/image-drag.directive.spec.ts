import { ImageDragDirective } from './image-drag.directive';
import { DomSanitizer } from '@angular/platform-browser';
describe('ImageDragDirective', () => {
  
  it('should create an instance', () => {
    const mockSanitizer = {
      bypassSecurityTrustUrl: (url: string) => url
    } as unknown as DomSanitizer;
    
    
    const directive = new ImageDragDirective(mockSanitizer);
        expect(directive).toBeTruthy();
  });
});
