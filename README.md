#                         Manual Técnico 

## 1.	Introducción:


Tu Compañero en la Gestión de la Diabetes.
Bienvenido a Life Harmony, la aplicación diseñada con cariño para hacer que la gestión de la diabetes sea más fácil y personalizada que nunca. Con un enfoque en la armonía entre la alimentación, la actividad física y la salud, Life Harmony se convierte en tu aliado para lograr un equilibrio vital.

## 2.	Descripción del proyecto:

¿Qué es Life Harmony? Life Harmony es más que una aplicación; es una herramienta integral para aquellos que enfrentan el desafío diario de vivir con diabetes. Desarrollada pensando en la simplicidad y la efectividad, la aplicación se centra en la gestión de dietas como un componente clave para controlar la diabetes y mejorar la calidad de vida.


## 3.	Roles / integrantes

Dorian Estefan Choque Calderon        ->        Team Líder/Dev/Arquitecto Base De Datos
Anthony Brandon Echeverria Zurita   ->         Dev/QA
Carlos Soria Flores                              ->         Git Master/Dev    

## 4.	Arquitectura del software:
Life Harmony es una aplicación móvil y web diseñada para ayudar a las personas que viven con diabetes a gestionar su enfermedad de manera más efectiva y personalizada. La arquitectura del software se ha diseñado teniendo en cuenta la escalabilidad, el modularidad y la facilidad de mantenimiento. A continuación, se detallan los componentes principales y las interacciones entre ellos:
•	Frontend Móvil y Web:La aplicación tiene dos interfaces de usuario: una para dispositivos móviles (Android e iOS) y otra para la web.Ambas interfaces de usuario se crearon utilizando el framework Ionic, lo que permite compartir gran parte del código entre las dos versiones y garantiza una experiencia de usuario coherente.
•	Backend:El backend de la aplicación es responsable de gestionar los datos y la lógica empresarial. Utiliza APIs para interactuar con la base de datos MongoDB y recuperar y almacenar información relacionada con los usuarios, las dietas y otros datos relevantes.
•	Base de Datos MongoDB:MongoDB se utiliza como sistema de gestión de bases de datos NoSQL para almacenar datos relacionados con usuarios, dietas, alimentos y otros aspectos clave de la aplicación. La base de datos se encuentra en la nube y se accede a través de la cadena de conexión proporcionada: mongodb+srv://admin:admin@cluster0.mqphdo8.mongodb.net/.
•	APIs y Servicios Web:La aplicación utiliza servicios web y APIs para realizar consultas a la base de datos y recuperar información relevante.Estas APIs son parte integral del backend y se encargan de procesar las solicitudes del cliente, realizar consultas a la base de datos y devolver los resultados.
•	Git y Control de Versiones:Se utiliza Git como sistema de control de versiones para rastrear y gestionar los cambios en el código fuente de la aplicación. Los desarrolladores pueden colaborar y mantener un historial completo de cambios para garantizar la integridad del código.
•	Firebase:Firebase se utilizó para el despliegue y guardado de imágenes de la aplicacion.
•	Seguridad:Se implementan medidas de seguridad, como la autenticación de usuarios y el acceso seguro a la base de datos, para proteger los datos de los usuarios y la aplicación en sí.
•	Componentes de Interfaz de Usuario:La interfaz de usuario se compone de diferentes componentes, como formularios para la entrada de datos, gráficos para mostrar.
•	Patrones de Diseño: Se han aplicado patrones de diseño de software, como el patrón MVC (Modelo-Vista-Controlador) o arquitecturas similares, para separar la lógica empresarial de la presentación y mantener el código organizado y mantenible.
•	
Esta arquitectura permite que Life Harmony sea una aplicación versátil y escalable que puede crecer para satisfacer las necesidades cambiantes de los usuarios. La división clara entre el frontend y el backend permite un desarrollo eficiente y facilita la implementación de nuevas características y mejoras en el futuro.


## 5.	Requisitos del sistema:
•	Requerimientos de Hardware (mínimo): (cliente) “Dispositivo Movil Android o iOS”
•	Requerimientos de Software: (cliente) “Android 8 en adelante”
•	Requerimientos de Hardware (server/ hosting/BD) “FALTA”
•	Requerimientos de Software (server/ hosting/BD)   “FALTA”

## 6.	Instalación y configuración: Para instalar y configurar el software de Life Harmony en un entorno de desarrollo, sigue estos pasos:
•	Requisitos Previos:
o	Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos e instalarlos desde el sitio web oficial de Node.js (https://nodejs.org/).
Paso 1: Clonar el Repositorio de Código Fuente
o	Abre una terminal o línea de comandos en tu sistema.
o	Navega hasta la ubicación en la que deseas clonar el repositorio.
o	Ejecuta el siguiente comando para clonar el repositorio de código fuente de Life Harmony desde GitHub:
git clone https://github.com/CARLOSCSF070/LIFE_HARMONY.git
Paso 2: Instalar Dependencias de Proyecto
o	En la terminal, navega hasta el directorio raíz del proyecto clonado:
cd LIFE_HARMONY
o	Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
npm install

Paso 3: Configurar la Conexión a la Base de Datos MongoDB
o	Abre el archivo de configuración de la aplicación. Por lo general, se encuentra en una ubicación como src/config/database.ts.
o	Dentro del archivo de configuración, encuentra la sección que contiene la cadena de conexión a MongoDB y asegúrate de que esté configurada correctamente:
ConstmongoDBConnectionString= "mongodb+srv://admin:admin@cluster0.mqphdo8.mongodb.net/";
Paso 4: Ejecutar la Aplicación en un Entorno de Desarrollo
o	En la terminal, ejecuta el siguiente comando para iniciar la aplicación en un servidor de desarrollo:
 ionic serve
o	Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador web predeterminado. Puedes acceder a ella en http://localhost:8100.


## 7.	PROCEDIMIENTO DE HOSTEADO / HOSTING (configuración)
•	Sitio Web.  “FALTA”
•	B.D.    “Mongo DB”
•	API / servicios Web “FALTA”
•	Otros “FireBase”

Detalle DETALLADO paso a paso de la puesta en marcha en hosting, tanto para el sitio Web, API, B.D., etc.etc. (incluir scripts BD, Credenciales de acceso server, root BD, Admin, users clientes etc.)

## 8.	GIT : 
•	Versión final entregada del proyecto. 
                         CARLOSCSF070/LIFE_HARMONY: LIfeHarmonyApp (github.com)
•	Entrega compilados ejecutables “APK”

9.	Personalización y configuración: 

El software es intuitivo, con el llenado del formulario se obtiene la Dieta requerida en base al tipo de Diabetes y la información de tipos de alimentos como complemento

## 10.	Seguridad: 

1. Validación de Datos:
•	Para garantizar que los datos ingresados sean precisos y cumplan con los requisitos de la aplicación, implementa una validación de datos estricta en los formularios y campos de entrada. Verifica que los valores estén dentro de los rangos permitidos y sean del tipo de datos correcto.
•	Proporciona retroalimentación clara y amigable al usuario en caso de que se ingresen datos incorrectos o fuera de rango.

## 11.	Depuración y solución de problemas: 

             Dado el caso tener una conexión a internet estable para la versión web 

## 12.	Glosario de términos: 
•	Backend: La parte de una aplicación de software que se encarga de la lógica empresarial y la gestión de datos, generalmente en el lado del servidor.

•	Base de Datos MongoDB: Un sistema de gestión de bases de datos NoSQL ampliamente utilizado que almacena datos en formato BSON (Binary JSON).

•	API (Interfaz de Programación de Aplicaciones): Un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.

•	Framework: Una estructura de desarrollo de software que proporciona un conjunto de herramientas y bibliotecas para simplificar tareas comunes de programación.

•	Git: Un sistema de control de versiones distribuido ampliamente utilizado para rastrear y gestionar cambios en el código fuente.

•	Ionic: Un framework de desarrollo de aplicaciones móviles y web que utiliza tecnologías web como HTML, CSS y JavaScript para crear aplicaciones multiplataforma.

•	NoSQL: Un enfoque de almacenamiento de datos que no utiliza el modelo de tabla relacional tradicional, como las bases de datos NoSQL, que incluyen MongoDB.

•	Firebase: Una plataforma de desarrollo de aplicaciones móviles y web que proporciona una variedad de servicios, como autenticación de usuarios y bases de datos en tiempo real.

•	Frontend: La parte de una aplicación que los usuarios interactúan directamente, generalmente la interfaz de usuario.

•	Hosting: El proceso de alojar una aplicación o sitio web en un servidor para que esté disponible en línea.

•	Validación de Datos: El proceso de verificar que los datos ingresados por los usuarios sean precisos y cumplan con los requisitos establecidos.

•	Control de Errores: El manejo de errores y excepciones que pueden ocurrir durante la ejecución de una aplicación.

•	Patrón de Diseño MVC (Modelo-Vista-Controlador): Una arquitectura de software que separa la aplicación en tres componentes principales: el Modelo (representación de los datos), la Vista (presentación de datos al usuario) y el Controlador (manejo de la lógica y las interacciones).

## 13.	Referencias y recursos adicionales: 

             Ionic Docs - Documentación de Ionic

             MongoDB Tutorials — MongoDB Manual

## 14.	Herramientas de Implementación:
•	Lenguajes de programación:
•	Frameworks:
•	APIs de terceros, etc.

## 15.	Bibliografía


               Ionic Docs - Documentación de Ionic

              MongoDB Tutorials — MongoDB Manual




https://github.com/ESTEFAN1001/LifeHarmony_movil //versión Integrada del proyecto 

https://stalwart-bunny-f90547.netlify.app //link apartado web 

https://univalleedu-my.sharepoint.com/:w:/g/personal/eza0030709_est_univalle_edu/EXqdJ_H81KZNiQDLoHd2zQkBmIS2MOO9GnZbs_SM_j2kFQ?e=bLNq0s //Manual Tecnico

https://drive.google.com/file/d/1PP43kJMvliY74v4EZmXspfGAskXq65jl/view?usp=sharing //Imagen Docker API
https://drive.google.com/file/d/1rmocdpcLvQap33DFkg6oQ_yExpBfsj40/view?usp=sharing //Dockerfile API

https://drive.google.com/file/d/1A_RsKEpgkJdjRT1noUUHHJfVyDT5J0e5/view?usp=sharing //Imagen Docker BDD
https://drive.google.com/file/d/1tmCFPi5DSecbhGG8FSxbLxFUT_I88qgK/view?usp=sharing //Dockerfile BDD

https://drive.google.com/file/d/1eVhjt8mOyV7E5HxKYmOt1v9yCMg7fyDb/view?usp=sharing //apk

https://univalleedu-my.sharepoint.com/:v:/r/personal/ccd0029570_est_univalle_edu/Documents/Recordings/Anthony%20and%20CARLOS-20231129_221320-Meeting%20Recording.mp4?csf=1&web=1&e=8wvVXM&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D
//Video Presentación

# LifeHarmony_movil
