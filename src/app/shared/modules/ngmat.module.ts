import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSnackBarModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class NgMatModule {}
