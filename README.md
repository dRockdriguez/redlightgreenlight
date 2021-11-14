# RedGreenLight
Angular 12.1.0 

## Tabla de contenidos

- [Introducción](#introducción)
- [Instalación](#instalación)
- [Entornos](#entornos)
- [Tests](#tests)
# Introdución
Para el desarrollo del proyecto se ha utilizado la versión 12.1.0 de Angular.
Se han definido diferentes scripts que se irán detallando a lo largo de este documento.

<pre><code>
 "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "test": "jest --config ./jest.config.js",
        "open:coverage": "http-server -o coverage",
        "lint": "eslint . --ext .ts --fix",
        "build:dev": "ng build --configuration=development",
        "start:dev": "ng serve -o --configuration=development",
        "build:pre": "ng build --configuration=pre",
        "start:pre": "ng serve -o --configuration=pre",
        "build:prod": "ng build --configuration=production --aot=true --buildOptimizer=true",
        "start:prod": "ng serve -o --configuration=production"
    }
</code></pre>
# Instalación
Se debe tener instalado [Node.js] y el cli de angular
<pre><code>npm install -g @angular/cli</code></pre>

Una vez hecho esto nos bastará con estar dentro del directorio del proyecto y ejecutar
<pre><code>npm i</code></pre>

# Entornos
El proyecto consta de tres ficheros de configuración, uno por entorno (por si fuesen necesarios), y además tiene creados los scripts para compilar y ejecutar la aplicación en cada uno de estos entornos.

Para ejecutarlo en local (contra el entorno de desarrollo) nos bastará con ejecutar el comando
<pre><code>ng serve</code></pre>

Si queremos ejecutar el proyecto contra cualquier otro entorno tendremos que ejecutar
<pre><code>npm run start:*entorno*</code></pre>

Para construir el proyecto para cualquier entorno lanzaremos el siguiente comando
<pre><code>npm run build:*entorno*</code></pre>
Esto genera un directorio /dist en la carpeta raíz del proyecto donde se econtrarán todos los ficheros estáticos (assets, javascript transpilado, css, etc.) que serán los que se podrán servir desde cualquier tipo de servidor web

# Tests
Para los tests unitarios se ha configurado jest y testing library.

Para lanzar los tests unitarios
<pre><code>ng test</code></pre>
Lo que además generará un directorio /coverage en la raiz del proyecto con el informe de cobertura de test en formato HTML.
Para abrir este informe:
<pre><code>npm run open:coverage</code></pre>

[node.js]: https://nodejs.org/