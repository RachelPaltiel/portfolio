import { Component } from '@angular/core';
import * as FileSaver from 'file-saver'


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
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
  
  downloadPdf() {
    const pdfUrl = '../../assets/RachelPaltielCV.pdf';
    const pdfName = 'RachelPaltielCV.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
