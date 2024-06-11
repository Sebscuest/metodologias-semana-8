
Aquí tienes los comandos necesarios para realizar todas las acciones que mencionaste:

Crear el directorio "proyectoPG" en el directorio de trabajo actual:
bash
Copiar código
mkdir proyectoPG
Cambiar al directorio "proyectoPG":
bash
Copiar código
cd proyectoPG
Crear 5 archivos dentro del directorio con nombres aleatorios (por ejemplo, archivo1.txt, archivo2.txt, etc.):
bash
Copiar código
touch archivo1.txt archivo2.txt archivo3.txt archivo4.txt archivo5.txt
Cambiar los permisos del directorio y su contenido de forma recursiva para que solo el propietario pueda leer, escribir y ejecutar, mientras que el grupo y los demás usuarios no tengan ningún acceso:
bash
Copiar código
chmod -R 700 proyectoPG
Estos comandos crean el directorio "proyectoPG" en tu directorio de trabajo actual, crean 5 archivos dentro de este directorio y luego cambian los permisos de manera recursiva para que solo el propietario tenga acceso de lectura, escritura y ejecución, mientras que el grupo y otros usuarios no tengan ningún acceso.

Para adjuntar un archivo que muestre el listado de archivos antes y después del cambio de permisos, puedes usar el comando ls antes y después de ejecutar el comando chmod, y redirigir la salida a un archivo. Por ejemplo:

Antes:

bash
Copiar código
ls -l > antes_permisos.txt
Después:

bash
Copiar código
ls -l > despues_permisos.txt
Esto creará dos archivos, "antes_permisos.txt" y "despues_permisos.txt", que contendrán el listado de archivos antes y después del cambio de permisos, respectivamente. Puedes adjuntar esos archivos aquí.