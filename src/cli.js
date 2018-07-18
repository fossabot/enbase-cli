import {Enbase} from 'enbase';

const program = require('commander');
const { version } = require('./../package.json');

const defaults = {
	port: 4999,
	dbName: 'enbase',
	dbUrl: 'mongodb://localhost:27017',
	rulesPath: require('path').join(process.cwd(), 'rules.json')
};

export default () => {
	program
		.version(version)
		.description('Run a server instance')
		.option(`-p, --port [port]', 'Network port to listen (default: ${defaults.port})`)
		.option(`-r, --rules [db_url]', 'Rules file path (default: ${defaults.rulesPath})`)
		.option(`-dbname, --db_name [db_name]', 'MongoDB database name (default: ${defaults.dbName})`)
		.option(`-dburl, --db_url [db_url]', 'MongoDB address (default: ${defaults.dbUrl})`)
		.parse(process.argv);
	const port = program.port || defaults.port;
	const rules = program.port || defaults.rulesPath;
	const dbName = program.db_name || defaults.dbName;
	const dbUrl = program.db_url || defaults.dbUrl;
	new Enbase()
		.connect({
			port, mongoName: dbName, mongoUrl: dbUrl, rulesPath: rules
		});
};