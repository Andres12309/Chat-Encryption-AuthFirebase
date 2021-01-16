# Chat-Encryption-AuthFirebase

_Chat cifrado con Ionic y Angular, usando los servicios de almacenamiento de firebase_

## Introduccion 🚀

_Este es un proyecto de chat general que esta cifrado los mensajes y las rutas hacia ellos protegidas, ademas posee un envio de imagenes que estaran almacenados en firebase_

Mira **enviroments** para conocer las credenciales que uso para firebase.

**También puedes mirar el video del funcionamiento de este proyecto en [youtube](https://youtu.be/Rd3iWXREEhs).***

### Instrucciones 📋

_Puedes clonarte el repositorio o hacer un fork_

```
git clone https://github.com/Andres12309/Chat-Encryption-AuthFirebase.git
```

### Instalación 🔧

_Una véz clonado puedes instalar todas las dependencias con el gestor de paquetes npm_

_Instalar dependencias_

```
npm install
```

_Instala firebase_

```
ionic cordova plugin add cordova-plugin-firebase
npm install @ionic-native/firebase
```

_Instala CryptoJS_

```
npm install crypto-js
npm install --save @types/crypto-js
```

_Una vez realizado todo lo anterior puedes navegar en el codigo, tiene algunos servicios y la carpeta principal de chat que esta en home.page.html y home.page.ts_

## Explicació del proyecto🔩

_El proyecto esta en servicios de autenticacion y su pagina de login, ademas de esto tiene el servicio de carga de archivos a firebase_

### LOGIN.PAGE 📋

_Este tiene una las funciones de autenticacion que interactua con su html respectivo, tiene una funcion para iniciar sesión denominada **onSubmitLogin**, esta si existe el usuario en firebase Authentication permite al usuario ingresar al chat general, ademas posee un metodo para registrar un nuevo usuario denominada **onSubmitSingUp**, esta permite agregar un nuevo usuario a firebase Authentication con sus credenciales respectivas y luego acceder al chat general, todas estas rutas estan protegidas en app-routing.module aqui esta implementado una protecion de login o podria decirse que es un tipo filtro para todos los usuario no registrados_

### HOME.PAGE 📋

_Este tiene una las funciones de chat que interactua con su html respectivo, tiene una funcion de envio de mensajes denominada **sendMessage**, esta encripta los mensajes y los envia a firebase, ademas de esto uso un metodo para la carga y envio de imagenes denominada **upload**, este carga la imagen y almacena en storage de firebase, pero la la url de la imagen la almacena en el mensaje del usuario  que la envio, finalmente posee una funcion de cerrar sesión denominada **logout**, esta como su nombre lo indica invalida la sesión_

### SERVICIOS 📋

_Este tiene los metodos para conectar los servicios anteriores a los servicios de firebase, **auth.service.ts** posee toda la logica de validar usuario para el ingreso y el registro denominadas **login** y **singUp** respectivamente, ademas posee el metodo de agregar mensaje **addChatMessage** y a su vez obtener los mensajes **getChatMessages** de cada usuario, ademas un metodo para obtener el usuario que esta enviando los mensajes denominada **getUserForMsg** y el metodo de invalidar la sesion con firebase nombrada **logout**_

## Ejecución del proyecto🔩

_Compila el proyecto_

```
ionic serve
```

## APK ⚙️

_En el proyecto se encuantra un archivo .apk, puedes usarla en cualquier dispositivo android o a su vez usar un emulador_

### Build APK 🔩

_Puedes realizar un build para cualquier platafor directamente del proyecto_

```
ionic cordova build <platform>
```

## Autor ✒️

_Este proyecto fue realizado_

* **Andrés Proaño** - *Examen* - [Andres](https://github.com/Andres12309)

## Gracias 🎁

* Revisa documentacion de [Ionic](https://ionicframework.com/docs) 📢
* Gracias por elegir mi proyecto 🤓.
