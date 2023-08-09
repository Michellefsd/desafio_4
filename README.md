
Desafio 4
____________

En esta carpeta encontrarás los siguientes archivos
    en la raíz:     
        1) index.html (Para ej 1 y 2 en JS)
        2) ej3.html (Para ej 3 en JS)
        3) README.md (Ud. se encuentra Aquí)
        4) EJ_2.md (explica como realice el ej 2 en Py y JS)

        ejercicios realizados en Python
        5) ej_4-1.py
        6) ej_4-2.py
        7) ej_4-3.py



Para Javascript:

Ejercicio 1 

1) index.html:
abrí el index en el navegador y en la consola del navegador, escribí:
buscar_valor(lista, numero)
tengo una lista si deseas probarla con mi lista ... se llama: "miLista"
Si el número que escribes como parámetro está en mi lista de números 
devolverá el número de index. si no está, devolverá -1.


Ejercicio 2       *    Notese que este ejercicio tiene un  4) EJ_2.md aparte debido a la complejidad

1) index.html:
abrí el index en el navegador y en la consola del navegador, escribí:
obtener_datos_climaticos("ciudad")
si quieres una ciudad especifica pones el nombre en un string
si dejas el parámetro vacío te devolverá el documento con puntos y comas con todas las 
capitales de latinoamerica.


Ejercicio 3

En el navegador abí 2) ej3.html:
escribí en el buscador el nombre de una ciudad




Para Python:
Si no tienes nada instalado en tu computadora deberas seguir estas instrucciones:

1. **Instalar Python:**
   
   Si la computadora no tiene Python instalado, deberás descargar e instalar Python desde el sitio web oficial: https://www.python.org/downloads/

   Opcional: (para ej 2 y 3)
       2. **Obtener API Key:**

          Si aún no tienes una clave de API de OpenWeatherMap, debes registrarte en la plataforma y obtener una clave desde aquí: https://home.openweathermap.org/users/sign_up

       3. **Configurar Variable de Entorno:**

          Debes configurar una variable de entorno llamada "API_KEY" con el valor de la clave de API que obtuvo de OpenWeatherMap. Puedes explicar cómo configurar variables de entorno en el sistema operativo específico (Windows, macOS, Linux).

4. **Abrir la Terminal:**
   
   Deberás abrir la terminal o línea de comandos en tu sistema operativo. y pararte sobre la carpeta desafio_4

5. **Instalar la Librería Requests:** (para ej 2 y 3)
   
   En la terminal, debes ingresar el siguiente comando para instalar la librería `requests` utilizando `pip`, que es el administrador de paquetes de Python:

   ```bash
   pip install requests
   ```
   Algunas computadoras precisan que Reinicies tu espacio de trabajo 







6. **Ejecutar el Código:**


Ejercicio 1

en terminal ejecutar  python ej_4-1.py
y seguir las instrucciones, tienes una lista de ejemplo para utilizar: myList.


Ejercicio 2       *    Notese que este ejercicio tiene un 4) EJ_2.ME aparte. 
Es opcional de leer, explica los pasos que hice a modo resumido.

Si quiere ejecutarlo con una variable de entorno debera comentar la linea 51
y descomentar la linea 52 a la vez que consigue su propia variable de entorno en este caso llamada API_KEY

parado en desafio_4 en la terminal ejecutar python ej_4-2.py
opción 1) devuelve todas las capitales de latinoamerica en un documento csv que crea.
opción 2) pregunta el nombre de la ciudad a la que deseas acceder

Ejercicio 3     

Si quiere ejecutarlo con una variable de entorno debera comentar la linea 10
y descomentar la linea 11 a la vez que consigue su propia variable de entorno 

parado sobre la carpeta desafio_4, 
en terminal ejecutar python ej_4-3.py
te pregunta la ciudad a la que deseas acceder a su informacion
