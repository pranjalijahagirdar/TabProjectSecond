import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-tab',
    templateUrl:'./tab.component.html',
    styleUrls:['./tab.component.scss']
})
 
export class TabComponent implements OnInit{
selectedSkill : string = 'marathi';
selectedColor : string = 'pink';
constructor(){}

ngOnInit():void{}

onSkillchange(skill:string){
    this.selectedSkill = skill;
}

oncolorchange(color:string){
    this.selectedColor = color;
}
}
