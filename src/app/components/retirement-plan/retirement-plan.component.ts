import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { UpdateAccountComponent } from '../update-account/update-account.component';

@Component({
  selector: 'app-retirement-plan',
  templateUrl: './retirement-plan.component.html',
  styleUrls: ['./retirement-plan.component.scss'],
})
export class RetirementPlanComponent implements OnInit {
  retirementPlan: any;
  bsModalRef: BsModalRef;

  constructor(
    private dataservice: DataService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.dataservice.getData().subscribe((data) => {
      this.retirementPlan = data;
    });
  }

  openUpdateAccountModal() {
    // const data = { data1: 'sdjhasgdjhg' };
    const initialState = {
      list: [
        {"accoutNumber":this.retirementPlan.accountNumber}
      ]
    };
this.bsModalRef = this.modalService.show(UpdateAccountComponent, {initialState});
this.bsModalRef.content.closeBtnName = 'Close';  

  }
}
