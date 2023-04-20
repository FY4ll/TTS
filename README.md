Application de visualisation de salle en 3D utilisant Microsoft Graph, PHP, JavaScript et Three.js
==================================================================================================

Cette application permet aux utilisateurs de visualiser une salle en 3D en utilisant Microsoft Graph, PHP, JavaScript et Three.js. Elle inclut une page de connexion utilisant l'authentification Microsoft avec Microsoft Graph et une page de profil utilisateur qui contient toutes les informations utilisateur.

Microsoft Graph est une API pour accéder à des données Microsoft, telles que les événements, les tâches et les contacts, et est connecté à Azure Active Directory pour l'authentification. PHP est utilisé pour l'interaction avec la base de données et pour la communication avec Microsoft Graph. JavaScript est utilisé pour la création de la page de visualisation de salle en 3D avec Three.js et l'affichage des disponibilité via des lampes dans le modèle 3D.

Pour utiliser l'application, l'utilisateur doit s'authentifier avec son compte Microsoft, puis accéder à la page de visualisation de salle en 3D pour voir les salles chargées avec Three.js.

Installation
------------

- Cloner le dépôt
- Configurer l'environnement PHP
- Configurer l'authentification Microsoft Graph

Configuration
-------------

La configuration de l'application se fait dans le fichier `composer.json`. Les informations d'authentification Microsoft Graph doivent être fournies dans un .env pour pouvoir se connecter et accéder aux informations utilisateur.

Utilisation
-----------

L'utilisateur doit s'authentifier avec son compte Microsoft en utilisant la page de connexion. Après s'être connecté, l'utilisateur est redirigé vers la page des salle où il peut voir toutes ses informations sur les salles ainsi que les rendez-vous.

