export const CONNECTION_TIMEOUT = 30e3;
export const MAX_RETRIES = 1000;
export const PING_TIMEOUT = 10 * 1000;
export const PING_DELAY = 10 * 1000;
export const DEBUG = false;
export const CONNECTION_CLOSED_ERROR_MESSAGE = 'connection closed';

export const CHAIN_API = {
	DATABASE_API: 'database',
	NETWORK_BROADCAST_API: 'network_broadcast',
	HISTORY_API: 'history',
	REGISTRATION_API: 'registration',
	ASSET_API: 'asset',
	LOGIN_API: 'login',
	NETWORK_NODE_API: 'network_node',
	ECHORAND_API: 'echorand',
	DID_API: 'did',
};

export const CHAIN_APIS = [
	CHAIN_API.DATABASE_API,
	CHAIN_API.NETWORK_BROADCAST_API,
	CHAIN_API.HISTORY_API,
	CHAIN_API.REGISTRATION_API,
	CHAIN_API.ASSET_API,
	CHAIN_API.LOGIN_API,
	CHAIN_API.NETWORK_NODE_API,
	CHAIN_API.ECHORAND_API,
	CHAIN_API.DID_API,
];
export const DEFAULT_CHAIN_APIS = [
	CHAIN_API.DATABASE_API,
	CHAIN_API.NETWORK_BROADCAST_API,
	CHAIN_API.HISTORY_API,
	CHAIN_API.LOGIN_API,
];

export const STATUS = {
	OPEN: 'OPEN',
	ERROR: 'ERROR',
	CLOSE: 'CLOSE',
};