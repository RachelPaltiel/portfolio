import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {

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
