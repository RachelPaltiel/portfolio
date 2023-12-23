import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  isPhoneviewed = false;

  constructor(public responsive: BreakpointObserver) { }

  ngOnInit() {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhoneviewed = false;

        if (result.matches) {
          this.isPhoneviewed = true;
        } {
          console.log(
            'HandsetPortrait is on'
          );
        }

      });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
