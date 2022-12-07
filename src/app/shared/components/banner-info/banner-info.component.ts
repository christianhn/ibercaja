import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-info',
  templateUrl: './banner-info.component.html',
  styleUrls: ['./banner-info.component.scss']
})
export class BannerInfoComponent {

  @Input() title: string = "";
  @Input() img: string = "";

}
