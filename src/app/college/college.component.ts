import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about/about.interface';
import { COLLEGE_ABOUT$ } from '../about/about.providers';
import { default_college_translations } from './translations';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
})
export class CollegeComponent implements OnInit {
  college: AboutInterface;
  isLoading: boolean = true;
  translations?: Object;
  defaultTranslations = default_college_translations;
  @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>;

  constructor() {}

  getCollege(): void {
    this.college$.subscribe((college) => {
      setTimeout(() => {
        this.college = college;
      }, 100);
    });
  }

  ngOnInit() {
    this.getCollege()
  }
}
