import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, AnimationProp } from '@fortawesome/angular-fontawesome';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'experience-entry',
    imports: [NgbCollapse, FontAwesomeModule, NgOptimizedImage],
    templateUrl: './experience-entry.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './experience-entry.component.scss'
})
export class ExperienceEntryComponent {
  @Input() jobEntry!: JobEntry;
  @Input() last!: boolean;

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;

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

  // Calculates the time spent in a given position and returns it as a formatted string,
  // rounded to the nearest half-year
  calculateDuration(): String {
    const millisInPosition = this.jobEntry.positions.reduce((accumulator, position) => {
      return accumulator + ((position.end ?? new Date()).valueOf() - position.start.valueOf());
    }, 0);
    const yearsInPosition = millisInPosition / 1_000 / 60 / 60 / 24 / 365;
    const roundedToNearestHalf = Math.round(yearsInPosition * 2) / 2;
    return roundedToNearestHalf + (roundedToNearestHalf === 1 ? " year" : " years");
  }

  getStartTimeStr(position: JobPosition): String {
    const date = position.start;
    return this.getThreeCharMonthDate(date);
  }

  getEndTimeStr(position: JobPosition): String {
    const date = position.end;
    if (!date) {
      return "Present";
    }
    return this.getThreeCharMonthDate(date);
  }

  // Takes in a date object and returns a string like "Jan 2025"
  getThreeCharMonthDate(date: Date): String {
    return date.toLocaleString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  }
}

export interface JobEntry {
  companyName: string;
  companyURL: string;
  latestPositionName: string;
  logoURL: string;
  positions: JobPosition[];
  responsibilities: Responsibility[];
  technologies: JobTechnology[];
  logoHeight?: number;
  logoWidth?: number;
}

export interface Responsibility {
  segments: ResponsibilitySegment[];
}

export interface ResponsibilitySegment {
  text: string;
  // Optional URL. If provided, the text will be rendered as a hyperlink
  url?: string;
}

export interface JobPosition {
  title: string;
  start: Date;
  // If end is undefined, it means the position is ongoing
  end?: Date;
}

export interface JobTechnology {
  title: string;
  logoURL: string;
}