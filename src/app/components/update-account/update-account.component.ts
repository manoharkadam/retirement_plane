import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef) { }
  
@Input() list: any;

  ngOnInit(): void {
    console.log('dataForm', this.list)
  }

  signInForm = this.fb.group({

  })

}
