import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
