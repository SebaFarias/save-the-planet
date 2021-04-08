Estimados dioses del Olimpo, soy relativamente nuevo en este grupo y por primera vez me acerco a estas alturas para elevar una consulta y que me puedan guiar, espero no morir en el intento...

Resulta que llegó a mí la opción de desarrollar por primera vez un proyecto M2M y tengo algunas dudas en las que espero que me puedan guiar.

El sistema estará montado con un RTU conectado a distintos sensores y motores. En principio la parte de programar las respuestas del RTU en base a las lecturas de los sensores no me complica en demasía pero me interesa poder registrar dichas lecturas en una base de datos.

Para eso, debido a mi background de desarrollador web, pretendo levantar un servidor con Node.js al que el RTU vaya posteando los datos una vez al día con el fin de recojer esos datos y presentarlos en un dashboard estilo CoreUi. Este RTU maneja comunicación GPRS/3G mediante protocolo Modbus TCP.

Para comunicar el RTU con mi servidor básicamente tengo dos dudas:

1) ¿Estoy bien encaminado o lo que pretendo hacer es imposible x alguna razón q desconozco y debería hacerse de otra manera?

2) ¿Cómo puedo parsear el request que envíe el RTU? ¿Existe algúna librería de js que maneje este tipo de mensajes?

Creo que son preguntas con respuestas largas y complejas, por lo que si me pueden indicar bibliografía o documentación donde aprender al rspecto también será de gran utilidad.

Los leo

(Foto del RTU)


