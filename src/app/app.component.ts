import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'svg2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exemple-error-path';

  constructor() {

  }

  async createPDF() {
    const areaSvg = document.getElementById('area_svg_print');
    const desenhoTotal = document.getElementById('desenho_total_print');

    const pdf = new jsPDF('portrait', 'cm', [21.0, 29.6]);
    desenhoTotal.setAttribute('transform', 'scale(1)');

    await pdf.svg(areaSvg, { width: 21.0, height: 29.6 });
    const uri = pdf.output('datauristring');
    this.download(uri);
  }

  download(uri) {
    const  link = document.createElement('a');
    link.download = 'exemple.PDF';
    link.href = uri;
    link.click();
  }

}
