project-root/
├── src/
│   ├── app.js
│   ├── config/
│   │   ├── config.js
│   │   ├── development.js
│   │   ├── production.js
│   │   └── ... (other environment-specific configs)
│   ├── db/
│   │   ├── migrations/
│   │   │   └── ... (database migration scripts)
│   │   ├── models/
│   │   │   └── ... (Sequelize models)
│   │   └── index.js (Sequelize connection setup)
│   ├── domains/
│   │   ├── users/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── resolvers/
│   │   │   └── types/
│   │   └── products/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── resolvers/
│   │       └── types/
│   ├── graphql/
│   │   ├── resolvers/
│   │   │   └── index.js (root resolver)
│   │   ├── schema.js (GraphQL schema definition)
│   │   └── types/
│   │       └── ... (GraphQL type definitions)
│   ├── middleware/
│   │   ├── auth.js
│   │   └── ... (other middleware functions)
│   ├── routes/
│   │   └── ... (Express route definitions)
│   ├── services/
│   │   └── ... (business logic services)
│   ├── utils/
│   │   ├── helpers.js
│   │   └── logger.js
│   └── index.js (application entry point)
├── tests/
│   └── ... (test files)
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json
└── README.md