import { Component } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'resume-component',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  constructor(private fileService: FileService) {}

  downloadResume() {
    const url = '/assets/resume.pdf';
    this.fileService.downloadFile(url).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'chris-loftis-resume.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
