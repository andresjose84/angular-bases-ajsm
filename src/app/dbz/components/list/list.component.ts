import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component( {
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
} )
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id:'',
      name: '',
      power: 0
    }
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter ( index: string ): void {
    console.log( { index } );
    this.onDeleteId.emit( index );
  }

}
