import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'additional-info-descriptor',
  templateUrl: './additional-info-descriptor.component.html',
  styleUrls: ['./additional-info-descriptor.component.scss']
})
export class AdditionalInfoDescriptorComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  additionalInfo: string;

  constructor() { }

  ngOnInit() {
  }

}
