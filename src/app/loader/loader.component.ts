import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState} from '../Services/http-service/loader';
import { LoaderService} from '../Services/http-service/loader.service';
import { ModalService } from '../modal/modal.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show: boolean = false;
  private element: any;

  private subscription: Subscription;
  constructor(private loaderService: LoaderService, private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnInit() {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // document.body.appendChild(this.element);
    console.log("loader")
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        if (this.show) {
          this.openModal();
        } else {
          this.closeModal();
        }

      });
  }

  openModal() {
    this.modalService.open('AppLoader');
  }
  //Close the Popup
  closeModal() {
    this.modalService.close('AppLoader');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
