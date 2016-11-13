import {Home} from "./app/components/home";
import {About} from "./app/components/about";
import {Transition} from "ui-router-ng2";

/** States */
export const homeState = { name: 'home', url: '/home',  component: Home }; 

export const aboutState = { name: 'about', url: '/about',  component: About };