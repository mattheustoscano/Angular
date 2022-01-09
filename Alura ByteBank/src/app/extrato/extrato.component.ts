import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css','./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  @Input() transferencias : any[] = [];

  constructor(private service: TransferenciaService) { } // Injetando a dependencia do service

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
      console.table(this.transferencias);
    });
  }

}
