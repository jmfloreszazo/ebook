[![Principios SOLID](/img/solid.png)]

Guía rápida para aprender qué son y cómo aplicar los principios SOLID.

**Índice**

# 1. Principio de Responsabilidad Única

Un objeto debe realizar una única cosa. Si no prestamos atención a esto, acabaremos teniendo clases que tienen varias responsabilidades lógicas.

## 1.1 Detectar si estamos violando el Principio

Detectar situaciones en las que una clase podría dividirse en varias, pero sin obsesionarse:

* En una misma clase están involucradas dos capas de la arquitectura: esta puede ser difícil de ver sin experiencia previa. En toda arquitectura, por simple que sea, debería haber una capa de presentación, una de lógica de negocio y otra de persistencia. Si mezclamos responsabilidades de dos capas en una misma clase, será un buen indicio.

* El número de métodos públicos: Si una clase hace muchas cosas, lo más probable es que tenga muchos métodos públicos, y que tengan poco que ver entre ellos. Detecta cómo puedes agruparlos para separarlos en distintas clases.

* Los métodos que usan cada uno de los campos de esa clase: si tenemos dos campos, y uno de ellos se usa en unos cuantos métodos y otro en otros cuantos, esto puede estar indicando que cada campo con sus correspondientes métodos podrían formar una clase independiente. Normalmente esto estará más difuso y habrá métodos en común, porque seguramente esas dos nuevas clases tendrán que interactuar entre ellas.

* Por el número de imports: Si necesitamos importar demasiadas clases para hacer nuestro trabajo, es posible que estemos haciendo trabajo de más. También ayuda fijarse a qué paquetes pertenecen esos imports. Si vemos que se agrupan con facilidad, puede que nos esté avisando de que estamos haciendo cosas muy diferentes.

* Nos cuesta testear la clase: si no somos capaces de escribir tests unitarios sobre ella, o no conseguimos el grado de granularidad que nos gustaría, es momento de plantearse dividir la clase en dos.

* Cada vez que escribes una nueva funcionalidad, esa clase se ve afectada: si una clase se modifica a menudo, es porque está involucrada en demasiadas cosas.

* Por el número de líneas: a veces es tan sencillo como eso. Si una clase es demasiado grande, intenta dividirla en clases más manejables. En general no hay reglas de oro para estar 100% seguros. La práctica te irá haciendo ver cuándo es recomendable que cierto código se mueva a otra clase, pero estos indicios te ayudarán a detectar algunos casos donde tengas dudas.

## 1.2 Ejemplo
## 1.3 Conclusión
# 2. Principio Open/Closed
## 2.1 ¿Cómo detectar que estamos violando el principio Open/Closed?
## 2.2 Ejemplo
## 2.3 ¿Cuándo debemos cumplir con este principio?
## 2.4 Conclusión
# 3. Principio de Sustitución de Liskov
## 3.1 ¿Cómo detectar que estamos violando el principio de sustitución de Liskov?
## 3.2 Ejemplo
## 3.3 ¿Cómo lo solucionamos?
## 3.4  Conclusión
# 4. Principio de segregación de interfaces
## 4.1 El problema
## 4.2 ¿Cómo detectar que estamos violando el Principio de segregación de interfaces?
## 4.3 Ejemplo
## 4.4 ¿Qué hacer con código antiguo?
## 4.5 Conclusión
# 5. Principio de inversión de dependencias
## 5.1 El problema
## 5.2 ¿Cómo detectar que estamos violando el Principio de inversión de dependencias?
## 5.3 Ejemplo
