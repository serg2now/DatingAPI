import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../_models/user';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-roles-modal',
    templateUrl: './roles-modal.component.html',
    styleUrls: ['./roles-modal.component.scss']
})
/** roles-modal component*/
export class RolesModalComponent {
  @Output() updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];

    /** roles-modal ctor */
  constructor(public bsModalRef: BsModalRef) {

  }

  updateRoles() {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }
}
