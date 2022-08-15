import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'museu',
  templateUrl: './museu.component.html',
  styleUrls: ['./museu.component.css'],
})
export class MuseuComponent implements OnInit {
  @Input() museu: any;

  constructor(private router: Router) {}

  openDetalhes(pagename: string, idMuseu: any): void {
    this.router.navigate([`${pagename}`,idMuseu]);
  }

  ngOnInit(): void {}
}
