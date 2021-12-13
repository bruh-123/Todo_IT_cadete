import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUserModule } from '../material-user.module';
import { ComponentsSharedModule } from '../../shared/components/components-shared.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { AceptadosComponent } from './aceptados/aceptados.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DisponiblesComponent,
    AceptadosComponent,
  ],
  imports: [
    CommonModule,
    MaterialUserModule,
    ComponentsSharedModule,
    RouterModule,
  ],
  exports: [
    MaterialUserModule,
    ComponentsSharedModule,
    HeaderComponent,
    RouterModule,
    DisponiblesComponent,
    AceptadosComponent,
  ],
})
export class ComponentsUserModule {}
