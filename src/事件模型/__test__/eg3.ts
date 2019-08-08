import {Emitter} from '../base/common/event';

let a=new Emitter({onFirstListenerAdd(){
  console.log('first listener add');
}});