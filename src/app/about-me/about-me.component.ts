import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

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


  downloadPdf() {
    const pdfUrl = '../../assets/RachelPaltielCV.pdf';
    const pdfName = 'RachelPaltielCV.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }



}
