import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  constructor() { }
  private name: string = 'mtuzo'
  @Output() clickEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
  handleClick() {
    this.clickEvent.emit(this.name);
  }
}
