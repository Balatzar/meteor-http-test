# meteor-http-test

#### Test pour une API meteor

##### But

Le but de ce test est de vérifier qu'un post fait sur une route exposée par l'API d'un serveur meteor (via Iron Router),
permet d'insérer des éléments dans la database, dont l'apparition sera repercutée à travers tous les clients connectés.

##### Moyens

Lancer la commande `meteor` pour démarrer le serveur. Celui-ci va automatiquement insérer un "evènement" dans la DB.
L'application front affiche simplement le nombre d'évènements dans la DB.

Pour faire une requête POST sur l'API, j'ai utilisé [postman](https://www.getpostman.com/) dont la version de base
est totalement gratuite.

Dans postman je fais simplement un requête POST sur la route `http://localhost:3000/api/events/create` (3000 étant le port
utilisé par meteor), en mettant dans le body un `id` (ex 2000) et un `nom` (ex CPLGN).

##### Résultat

L'API devrait normalement envoyer un code 200 avec le message "OK", et l'app front meteor devrait maintenant afficher que le
nombre d'évènement dans la DB est 2.

##### Pourquoi

Je ne suis pas encore du tout au point sur comment meteor marche dans les détails, mais les changements dans la DB mongo
sont détectés grâce au système d'`oplog` qui permet à l'app meteor de savoir quand des changements ont été effectués dans
la DB. Elle peut ensuite les répercuter à travers tous les clients connectés.

Voir https://meteorhacks.com/mongodb-oplog-and-meteor/
