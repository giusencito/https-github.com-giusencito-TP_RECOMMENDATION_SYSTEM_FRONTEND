import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-TermsDialog',
  templateUrl: './TermsDialog.component.html',
  styleUrls: ['./TermsDialog.component.css']
})
export class TermsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TermsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  acceptTerms(): void {
    this.dialogRef.close(true);
  }
}
