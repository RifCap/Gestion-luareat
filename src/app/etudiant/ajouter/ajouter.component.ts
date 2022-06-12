import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'perspective(800px) rotateY(180deg)',
      })),
      state('flipped', style({
        transform: 'perspective(800px) rotateY(0deg)'
      })),

      transition('default => flipped', [
        animate('1s')
      ]),
      transition('flipped => default', [
        animate('1s')
      ]),
    ])
  ]
  
})
export class AjouterComponent implements OnInit {

  editEtudiant:any;
  deleteEtudiant:any;
  etudiant :any= [
    {"nom": "abgar", "prenom": "mohammed", "state": "default"},
    {"nom": "simo", "prenom": "mohammed", "state": "default"},
    {"nom": "test", "prenom": "mohammed", "state": "default"},
    // {"nom": "ali", "prenom": "mohammed", "state": "default"},
    // {"nom": "morad", "prenom": "mohammed", "state": "default"},
    // {"nom": "wassim", "prenom": "mohammed", "state": "default"},
    // {"nom": "abgar", "prenom": "mohammed", "state": "default"},
    // {"nom": "simo", "prenom": "mohammed", "state": "default"},
    // {"nom": "test", "prenom": "mohammed", "state": "default"},
    // {"nom": "ali", "prenom": "mohammed", "state": "default"},
    // {"nom": "morad", "prenom": "mohammed", "state": "default"},
    // {"nom": "wassim", "prenom": "mohammed", "state": "default"},
  ];
  constructor() { }

  ngOnInit(): void {
    this.etudiant;
  }

  cardClicked(index : number) : void{
    const result = [...this.etudiant];
    const { state } = result[index];
    result[index] = { ...result[index], state: state == 'default' ? 'flipped' : 'default' };
    this.etudiant = result;
  } 

  public onOpenModal(etudiant:any, mode:string): void {
    console.log(etudiant);
    const container:any = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode === 'edit') {
      this.editEtudiant = etudiant;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete') {
      this.deleteEtudiant = etudiant;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

  public searchEmployee(key : any) {
    // console.log(key);
    const result :any = [];
    for(const etd of this.etudiant) {
      if(etd.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 || etd.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        result.push(etd);
      }
    }
    this.etudiant = result;

    if(result.length === 0 || !key) {
      this.etudiant;
    }
  }

}
