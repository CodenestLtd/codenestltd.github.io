import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showBackButton: boolean;

  @Output() goBack = new EventEmitter<void>();

  constructor(private location: Location) {}

  ngOnInit() {}
}
