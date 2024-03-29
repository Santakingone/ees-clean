import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyService } from '@app/core/services/notify.service';
import { Province } from '@app/models/db/province';
import { ModalService } from '@app/shared/components/modal/modal.service';
import { RowState } from '@app/shared/types/data.types';
import { MenuItem } from 'primeng/api';
import { Observable, of, switchMap } from 'rxjs';
import { Dbrt04Service,  } from '../dbrt04.service';

@Component({
  selector: 'x-dbrt04-detail',
  templateUrl: './dbrt04-detail.component.html'
})
export class Dbrt04DetailComponent {
  form: FormGroup;
  data: Province;
  breadcrumbItems: MenuItem[] = [
    { label: 'label.DBRT04.ProgramName', routerLink: '/db/dbrt04' },
    { label: 'label.DBRT04.Detail', routerLink: '/db/dbrt04/detail' },
]
constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private ms: NotifyService,
  private sv: Dbrt04Service,
  private md: ModalService,
  private router: Router) {
  this.createForm()
  this.route.data.subscribe(({ dbrt04Detail }) => {
    this.data = dbrt04Detail
    this.form.patchValue(dbrt04Detail)
    this.rebuildData()
  })
}

createForm() {
  this.form = this.fb.group({
    provinceCode: [null],
    provinceTh: [null,[Validators.required, Validators.pattern(/^[ก-๙]+$/)] ],
    provinceEn: [null, [Validators.required, Validators.maxLength(200),Validators.pattern(/^[A-Z a-z]+$/)]],
    active: [null],
    description: [null, [Validators.maxLength(200)]],
    rowState: [null],
    rowVersion: [null],
  })
}

rebuildData() {
  if (this.data) {
    this.form.controls["rowState"].setValue(RowState.Normal);
  }
  else{
    this.form.controls["rowState"].setValue(RowState.Add);
    this.form.controls["active"].setValue(true);
  }

  this.form.valueChanges.subscribe(() => {
    if (this.form.controls['rowState'].value == RowState.Normal) this.form.controls['rowState'].setValue(RowState.Edit);
  })

  this.form.markAsPristine()
}

validate = () => this.form.invalid;

save() {
  if (this.validate()) {
    this.ms.warning("message.STD00013");
    this.form.markAllAsTouched();
  }
  else {
    const data = this.form.getRawValue();
    this.sv.save(data).pipe(
      switchMap((res:Province) => this.sv.detail(res.provinceCode))
    ).subscribe((res:Province) => {
      this.data = res
      this.data.rowState = RowState.Normal;
      this.form.patchValue(res)
      this.rebuildData()
      this.ms.success("message.STD00014");
      this.router.navigateByUrl('db/dbrt04');
    })
  }
}

canDeactivate(): Observable<boolean> {
  if (this.form.dirty) return this.md.confirm("message.STD00010");
  return of(true);
}
}


