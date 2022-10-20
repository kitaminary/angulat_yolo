import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { finalize } from 'rxjs/operators';
import { COLLEGE_ABOUT$ } from '../about.providers';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about.interface';
import { default_college_translations } from '../translations';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
})
export class CollegeComponent implements OnInit {
  public college?: AboutInterface;
  public isLoading = true;
  public translations?: Object;
  public defaultTranslations = default_college_translations;

  constructor(
    @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
  ) {}

  ngOnInit() {
    this.getCollege();
  }
  
  getCollege(): void {
    this.college$.subscribe((college) => {
      setTimeout(() => {
        this.college = college;
      }, 100);  
    });
  }
}
