import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"oauth-fb26c","appId":"1:498244003458:web:cfe90ea07d09d912b6369b","storageBucket":"oauth-fb26c.firebasestorage.app","apiKey":"AIzaSyB1g-yW4jdJ9348whXiXOltFgPjlFbYFS4","authDomain":"oauth-fb26c.firebaseapp.com","messagingSenderId":"498244003458","projectNumber":"498244003458","version":"2"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"oauth-fb26c","appId":"1:498244003458:web:cfe90ea07d09d912b6369b","storageBucket":"oauth-fb26c.firebasestorage.app","apiKey":"AIzaSyB1g-yW4jdJ9348whXiXOltFgPjlFbYFS4","authDomain":"oauth-fb26c.firebaseapp.com","messagingSenderId":"498244003458","projectNumber":"498244003458","version":"2"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
