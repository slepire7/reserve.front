import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatarData } from './formatar-data';


//CpfCnpjBr, DigitoVerificador, AgenciaConta,

@NgModule({
  declarations: [
    FormatarData
  ],
  imports: [
    CommonModule,

  ],
  exports: [FormatarData]
})

export class PipesModule { }
