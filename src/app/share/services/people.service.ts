import { Injectable } from '@angular/core';
import { PersonCard } from '../interfaces/person-card';
import { Crud } from '../interfaces/crud';
import { Person } from '../interfaces/person';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Crud<Person>{

  private _id:number = 1;
  private _people:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  public people$:Observable<Person[]> = this._people.asObservable();
  constructor() { }

  add(element: Person): Person | null {
    try {
      element.id = (this._id).toString();
      this._id++;
      let people:Person[] = this._people.getValue();
      people.push(element);
      this._people.next(people);
      return element;  
    } catch (error) {
      return null;
    }
    
    
  }
  remove(element: Person): Person|null {
    try {
      let people:Person[] = this._people.getValue();
      let idx = people.findIndex(p=>p.id==element.id);
      let person = people[idx];
      people.splice(idx,1);
      this._people.next(people);
      return person;
    } catch (error) {
      return null;
    }
  }
  update(element: Person): Person|null {
    try {
      let people:Person[] = this._people.getValue();
      let idx = people.findIndex(p=>p.id==element.id);
      let person = people[idx];
      people[idx]=element;
      this._people.next(people);
      return person;
    } catch (error) {
      return null;
    }
  }
  getAll(): Person[] {
    return this._people.getValue();
  }
  get(id: string): Person|null {
    let people:Person[] = this._people.getValue();
    let person:Person|undefined = people.find(p=>p.id == id);
    return !person?null:person;
  }

}
