# Plan Your Day

Plan Your Day est une application web de gestion de tâches, actuellement en
cours de développement. Elle permet de planifier les tâches de la journée et
de les organiser selon leur date.

## État actuel

Le projet comprend pour le moment un frontend fonctionnel :

- création d'une tâche avec un titre, une description et une date ;
- indication du niveau d'importance et d'urgence ;
- classement automatique des tâches dans les groupes **Today**, **Missed from past** et **Future** ;
- interface responsive basée sur React, Material UI et Tailwind CSS ;
- navigation initiale avec les vues « My day » et « Calendar ».

Les tâches sont actuellement conservées uniquement dans l'état de l'application
et sont perdues au rechargement de la page. Le dossier `Backend/` est réservé
aux prochaines étapes du projet.

## Technologies

- React 19 et TypeScript ;
- Vite ;
- Material UI et MUI X Date Pickers ;
- Tailwind CSS ;
- Day.js ;
- React Router.

## Prérequis

- Node.js 20 ou une version plus récente ;
- npm.

## Installation

Depuis la racine du dépôt :

```bash
cd Frontend
npm install
```

## Développement

Pour lancer le serveur de développement avec le rechargement automatique :

```bash
npm run dev
```

L'application sera disponible à l'adresse indiquée par Vite, généralement
`http://localhost:5173`.

## Scripts disponibles

À exécuter depuis le dossier `Frontend/` :

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Vérifie TypeScript et génère le build de production
npm run lint     # Lance ESLint
npm run preview  # Prévisualise le build de production
```

## Structure du projet

```text
PlanYourDay/
├── Backend/                 # Prévu pour l'API et la persistance
├── Frontend/
│   ├── public/              # Ressources publiques, dont le logo
│   ├── src/
│   │   ├── components/      # Barre supérieure, modale et groupes de tâches
│   │   ├── App.tsx          # Composition principale de l'application
│   │   └── routes.tsx       # Routes frontend
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Prochaines étapes prévues

- ajouter une API backend et une base de données ;
- conserver les tâches entre les sessions ;
- implémenter les vues calendrier et profil ;
- ajouter la modification, la suppression et la clôture des tâches ;
- ajouter l'authentification des utilisateurs ;
- compléter les tests automatisés.