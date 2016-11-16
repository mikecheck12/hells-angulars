import {Component} from '@angular/core';
import {Auth} from '../../auth/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.html',
  styleUrls: [ 'home.css' ]
})

export class Home {
 //Injects Auth service to be used in template
  constructor(private auth: Auth) {}

}