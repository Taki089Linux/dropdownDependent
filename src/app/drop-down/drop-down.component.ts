import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
  clientId: string = '';
  siteId: string = '';
  buildingId: string = '';
  floorId: string = '';
  client: any[] = [];
  constructor(private dropdownService: DropdownService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dropdownService.loadClients().subscribe((resp) => {
      this.client = resp.data;
    });
  }
}
