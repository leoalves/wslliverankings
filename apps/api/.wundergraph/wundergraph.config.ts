import { configureWunderGraphApplication, cors, EnvironmentVariable, introspect, templates } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const db = introspect.postgresql({
	apiNamespace: 'db',
	databaseURL: new EnvironmentVariable('DATABASE_URL'),
	introspection: {
		disableCache: true,
	},
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	apis: [db],
	server,
	operations,
	codeGenerators: [
		{
			templates: [
				// use all the typescript react templates to generate a client
				...templates.typescript.all,
			],
		},
		{
			templates: [templates.typescript.client],
			path: '../../../packages/generated-wundergraph'
		  }
	],
	cors: {
		...cors.allowAll,
		allowedOrigins:
			process.env.NODE_ENV !== 'production'
				? [
						// change this before deploying to production to the actual domain where you're deploying your app
						'http://localhost:5173',
				  ]
				: [new EnvironmentVariable('WG_ALLOWED_ORIGIN')],
	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined,
	},
});
