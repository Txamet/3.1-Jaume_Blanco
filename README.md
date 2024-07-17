# Entrega 3.1 - Learnyounode
# 1 - Configuración e instalación
Instalar los siguientes modulos en la terminal:
- npm install
- npm i bl
- npm install through2-map
- npx tsc

# 2 - Ejercicios Learnyounode
Para acceder a los ejercicios de Learnyounode, introducir en la carpeta raíz:
- cd learnyounode

Para iniciar un ejercicio escribir en la terminal:
- learnyounode

Seleccionar el ejercicio y para comprobar si la solución es la correcta, introducir en la terminal (en función del ejercicio):
1. HELLO WORLD - learnyounode verify ./dist/app/hello-world.js
2. BABY STEPS - learnyounode verify ./dist/app/baby-steps.js
3. MY FIRST I/0! - learnyounode verify ./dist/app/my-first-io.js
4. MY FIRST ASYNC I/O! - learnyounode verify ./dist/app/my-first-async-io.js
5. FILTERED LS - learnyounode verify ./dist/app/filtered-ls.js
6. MAKE IT MODULAR - learnyounode verify ./dist/app/make-it-modular.js
7. HTTP CLIENT - learnyounode verify ./dist/app/http-client.js
8. HTTP COLLECT - learnyounode verify ./dist/app/http-collect.js
9. JUGGLING ASYNC - learnyounode verify ./dist/app/juggling-async.js
10. TIME SERVER - learnyounode verify ./dist/app/time-server.js
11. HTTP FILE SERVER - learnyounode verify ./dist/app/http-file-server.js
12. HTTP UPPERCASERER - learnyounode verify ./dist/app/http-uppercaserer.js
13. HTTP JSON API SERVER - learnyounode verify ./dist/app/http-json-api-server.js

# 3 - Escenarios simulados con scripts propios
Desde la carpeta raíz escribir en la terminal el script indicado en el ejercicio y seguir las instrucciones.

1 - HELLO WORLD
- npm run world

Simplemente muestra por pantalla "HELLO WORLD".

2 - BABY STEPS
- npm run steps 3 5 7

Este ejercicio suma los números que vas introduciendo tras "npm run steps". Los números introducidos arriba son de ejemplo, se pueden probar otros y en distinta cantidad.

3 - MY FIRST I/O!
- npm run io ./lectura.txt

Este ejercicio muestra el número total de saltos de línea que hay en un archivo (lectura.txt). Se pueden probar otros dos archivos sustituyendo el archivo del ejemplo por "./lectura2.txt" o "./lectura3.txt".

4 - MY FIRST ASYNC I/O!
- npm run async-io ./lectura.txt

Este ejercicio muestra el número total de saltos de línea que hay en un archivo (lectura.txt), pero lo ejecuta de forma asíncrona. Se pueden probar otros dos archivos sustituyendo el archivo del ejemplo por "./lectura2.txt" o "./lectura3.txt".

5 - FILTERED LS
- npm run filtered ./learnyounode md

Introducimos un directorio (en el ejemplo "./learnyounode") y una extensión de archivo sin el punto (en el ejemplo "md"), y recibimos una lista de todos los archivos que tienen dicha extensión en el directorio indicado.

6 - MAKE IT MODULAR
- npm run modular ./learnyounode md

Introducimos un directorio (en el ejemplo "./learnyounode") y una extensión de archivo sin el punto (en el ejemplo "md"), y recibimos una lista de todos los archivos que tienen dicha extensión en el directorio indicado. A diferencia del ejercicio anterior, la función está en otro archivo y la importamos en otro.

7 - HTTP CLIENT
- npm run client http://localhost:3000/

Para este ejercicio se crea un servidor http con el contenido de un archivo txt para servir como url de prueba. El ejercicio consiste en extraer el contenido de la url y mostrarlo por consola. Se puede comprobar que es el mismo contenido introduciendo en el navegador : http://localhost:3000/

- Para salir, pulsar en la terminal Ctrl + C

8 - HTTP COLLECT
- npm run collect http://localhost:3000/

Para este ejercicio se crea un servidor http con el contenido de un archivo txt para servir como url de prueba. El ejercicio consiste en extraer el contenido de la url y mostrarlo por consola, a la vez que muestra el número total de carácetres. Se puede comprobar que es el mismo contenido introduciendo en el navegador : http://localhost:3000/

- Para salir, pulsar en la terminal Ctrl + C

9 - JUGGLING ASYNC
- npm run juggling http://localhost:3000/ http://localhost:3001/ http://localhost:3002/

Para este ejercicio se crean tres servidores http con el contenido de un archivo txt distinto cada uno para servir como urls de prueba. El ejercicio consiste en extraer el contenido de las urls y mostrarlo por consola en el mismo orden en que se han introducido en el comando. Se puede comprobar que es el mismo contenido introduciendo en el navegador : http://localhost:3000/ o http://localhost:3001/ o http://localhost:3002/. 

- Para salir, pulsar en la terminal Ctrl + C

10 - TIME SERVER
- npm run time 3000

Para este ejercicio se crea un servidor TCP con el puerto especificado en el comando (en el ejemplo "3000"). Devuelve por consola la fecha y hora en formato "YYYY - MM - DD HH:MM". Se puede probar con otros puertos que no esten en uso en el momento.

11 - HTTP FILE SERVER
- npm run file 3000 ./lectura.txt
