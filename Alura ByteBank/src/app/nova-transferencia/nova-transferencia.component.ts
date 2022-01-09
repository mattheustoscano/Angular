import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.componenent.css','./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    console.log('solicitada nova transferência');
    const valorEmitir: Transferencia = {valor : this.valor, destino : this.destino};
    this.service.adicionar(valorEmitir).subscribe( // subscribe == vai acontecer no futuro (async) | eu me inscrevo para obter o resultado
      (success) => {
        console.table(success);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => {
        console.error(error);
      });
  };

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
