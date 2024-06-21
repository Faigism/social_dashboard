import { initializeApp } from 'firebase/app'
import {
  getDatabase,
  get,
  push,
  set,
  ref,
  onValue,
  remove,
} from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBU_igYBrHy4GXIBUFMQjELkcGx50wBpVE',
  authDomain: 'dashboard-3a223.firebaseapp.com',
  projectId: 'dashboard-3a223',
  storageBucket: 'dashboard-3a223.appspot.com',
  messagingSenderId: '418950047593',
  appId: '1:418950047593:web:3acd3fa13008cec9c9bff8',
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export { database, get, push, set, ref, onValue, remove }
