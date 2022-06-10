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
  }

  cardClicked(index : number) : void{
    const result = [...this.etudiant];
    const { state } = result[index];
    result[index] = { ...result[index], state: state == 'default' ? 'flipped' : 'default' };
    this.etudiant = result;
  } 

}
