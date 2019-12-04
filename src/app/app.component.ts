import {Component, OnInit} from '@angular/core';
import {BntService} from './services/bnt.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  veiculoProprietario;
  veiculoProprietarioColunas = [
    'renavam',
    'placa',
    'nomecondutor',
    'denominacao',
    'marca',
    'cidade',
    'estado',
    'descricao'
  ];

  pontosCondutor;
  pontosCondutorColunas = [
    'anoinfracao',
    'idcadastro',
    'nome',
    'idcategoriacnh',
    'totalpontos'
  ];

  infracoesMultas;
  infracoesMultasColunas = [
    'mes',
    'ano',
    'qtdinfracoes',
    'valorinfracoes'
  ];

  historico;
  historicoColunas = [
    'renavam',
  'modelo',
  'marca',
  'ano',
  'nome_prop',
  'datacompra',
  'datavenda',
  ];




  constructor(
    private bntService: BntService
  ) {
  }

  ngOnInit(): void {
    this.loadAll();
  }

  pesquisar(renavam: string) {
    this.bntService.getTransfers(renavam)
      .subscribe(el => this.historico = el);
  }


  loadAll() {
    this.bntService.getTable('veiculoproprietario')
      .subscribe(el => this.veiculoProprietario = el);

    this.bntService.getTable('pontoscondutor')
      .subscribe(el => this.pontosCondutor = el);

    this.bntService.getTable('infracoesmultas')
      .subscribe(el => this.infracoesMultas = el);
  }





}
