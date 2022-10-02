Prueba frontend por: David Caballero, Ingeniero de Sistemas

Pasos para hacer funcionar correctamente el aplicativo:
1. Inicialmente se debe tener instalado el AngularCLI.
2. Una vez descargado el proyecto, se debe ejecutar el siguiente comando por terminal:
    $ npm install
3. Para el despliegue de la app en el navegador se debe ejecutar por terminal:
    $ ng serve --open
4. Se podrá observar en la URL por defecto: http://localhost:4200/airline

---NOVEDADES:
Para el uso de la app web, se utilizó la api: https://recruiting-api.newshore.es/api/flights/0
por lo tanto, el app funciona únicamente para vuelos directos.
Además, se consume el API, se implementa una programación orientada a objetos donde se realiza el uso 
de pipes para la conversion de la moneda, validaciones propias para que los campos sean distintos, de 
3 letras y en mayusculas, la modularización de componentes, implementación de componente padre e hijo 
para pasar variables, implementación de Tailwind para el manejo de estilos CSS y diseño.

---INCONVENIENTES:
No se pudo realizar el consumo de las otras dos APIS por el tema de lógica, unicamente fué la
indicada anteriormente y además, al momento de iniciar el app con el primer clic en "BUSCAR VUELOS"
se debe presionar 2 veces y el app funcionaria correctamente.

---USO DEL APP:
Inicialmente se debe dar clic encima de una de las divisas, luego indicar la ciudad de origen y la
de llegada (ambas no pueden ser iguales) y dar clic en "buscar vuelos".


