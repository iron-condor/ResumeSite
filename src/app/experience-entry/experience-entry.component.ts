import { Component, Input } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, AnimationProp } from '@fortawesome/angular-fontawesome';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'experience-entry',
  standalone: true,
  imports: [NgbCollapse, FontAwesomeModule, NgForOf, NgIf, NgOptimizedImage],
  templateUrl: './experience-entry.component.html',
  styleUrl: './experience-entry.component.scss'
})
export class ExperienceEntryComponent {
  @Input() jobEntry!: JobEntry;
  @Input() last!: boolean;

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;

  // TODO: Set this to true
  positionsCollapsed = true;
  positionsCollapseIcon = faCaretDown;
  positionsCollapseAnimation: AnimationProp | undefined = undefined;

  getPositionsCollapseAnimation(): AnimationProp | undefined {
    return this.positionsCollapseAnimation;
  }

  togglePositionsCollapsed() {
    this.positionsCollapseAnimation = "flip";
    this.positionsCollapsed = !this.positionsCollapsed;
    setTimeout(() => {
      this.positionsCollapseAnimation = undefined;
      this.positionsCollapseIcon = this.positionsCollapsed ? faCaretDown : faCaretUp;
    }, 250);
  }
}

export interface JobEntry {
  companyName: string;
  companyURL: string;
  duration: string;
  latestPositionName: string;
  logoURL: string;
  positions: JobPosition[];
  responsibilities: string[];
  technologies: JobTechnology[];
}

export interface JobPosition {
  title: string;
  start: string;
  end: string;
}

export interface JobTechnology {
  title: string;
  logoURL: string;
}