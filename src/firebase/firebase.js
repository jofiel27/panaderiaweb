import firebaseConfig from './config';
import app from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import {getAuth} from 'firebase/auth';

class Firebase{
  constructor(){
    if(!app.apps.length){
      app.initializeApp(firebaseConfig)
    }
    this.db= app.firestore()
    this.storage =app.storage();
  
  }
}

const firebase = new Firebase();

export default firebase
 