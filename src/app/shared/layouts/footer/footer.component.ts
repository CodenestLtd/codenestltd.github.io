import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton: boolean;

  @Output() goBack = new EventEmitter<void>();

  constructor(private location: Location) {}

  ngOnInit() {}
}
