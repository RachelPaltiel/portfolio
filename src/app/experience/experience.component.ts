import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

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
  
  
}
