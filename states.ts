import {Hello} from "./app/components/hello";
import {About} from "./app/components/about";
import {People} from "./app/components/people";
import {Person} from "./app/components/person";
import {PeopleService} from "./app/services/people";
import {Transition} from "ui-router-ng2";

/** States */
export const helloState = { name: 'hello', url: '/hello',  component: Hello }; 

export const aboutState = { name: 'about', url: '/about',  component: About };

export const peopleState = { 
  name: 'people',
  url: '/people',
  component: People,
  resolve: [
    { 
      token: 'people',
      deps: [PeopleService], 
      resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
    }
  ]
};

export const personState = {
  name: 'people.person',
  url: '/:personId',
  component: Person,
  resolve: [
    { 
      token: 'person', 
      deps: [Transition, 'people'],
      resolveFn: (trans, people) => 
          people.find(person => person.id === trans.params().personId)
    }
  ]
};