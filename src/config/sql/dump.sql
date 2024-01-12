create database envio_sms
CREATE TABLE "sms_message" (
  id SERIAL PRIMARY KEY,
  phone varchar(16) default NULL,
  message TEXT default NULL,
  status varchar(15) default NULL
);

INSERT INTO sms_message (phone,message,status)
VALUES
    ('+552475256-6184','nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae','ERRO DE ENVIO'),
  ('+558342513-7444','tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at,','RECEBIDO'),
  ('+558956212-2744','elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,','RECEBIDO'),
  ('+552835735-6865','nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel','RECEBIDO'),
  ('+551122581-8853','accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus','ERRO DE ENVIO'),
  ('+553443164-6142','feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede','ERRO DE ENVIO'),
  ('+559568241-4557','nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit','ERRO DE ENVIO'),
  ('+558867571-7743','ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec','RECEBIDO'),
  ('+552467425-6263','ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse','ERRO DE ENVIO'),
  ('+557718522-2876','odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec,','RECEBIDO'),
  ('+552331356-2862','faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi','ENVIADO'),
  ('+556845584-7538','Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor','ENVIADO'),
  ('+554766957-7422','mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed','ENVIADO'),
  ('+557393755-6368','non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,','RECEBIDO'),
  ('+551243539-9522','Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.','ENVIADO'),
  ('+557428318-2579','vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam','ENVIADO'),
  ('+558732423-7917','eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem.','RECEBIDO'),
  ('+552383982-2853','eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec','RECEBIDO'),
  ('+551857563-7865','porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc','ENVIADO'),
  ('+552983672-5266','ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt','ENVIADO');