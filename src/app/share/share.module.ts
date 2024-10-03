import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { IonicModule } from '@ionic/angular';
import { PeopleCounterComponent } from './components/people-counter/people-counter.component';




@NgModule({
  declarations: [PersonalCardComponent, PeopleCounterComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[PersonalCardComponent, PeopleCounterComponent]
})
export class ShareModule { }
