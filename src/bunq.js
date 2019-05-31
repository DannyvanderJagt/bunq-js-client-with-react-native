import Rsa from 'react-native-rsa-native';
import Store from './Store';

async function setupBunq(opts = {}){
	const BunqClient = require('@bunq-community/bunq-js-client').default;
	
	// Setup our custom React-Native store and load from AsyncStorage
	const store = new Store('bunq')
	await store.restoreFromMemory()

	// Generate our RSA public and private keys with 2048 bit.
	const keys = await Rsa.generateKeys(2048);

	// Convert our public key from 'RSA PUBLIC KEY' to 'PUBLIC KEY'
	const publicKey = [
		'-----BEGIN PUBLIC KEY-----',
		`MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A ${keys.public.split(/\n/g).slice(1, 7).join('\n')}`,
		'-----END PUBLIC KEY-----',
	].join('\n');

	// By-pass the (slow) key generation and provide our own keys
    process.env.ENV_CI = 'true'
	process.env.CI_PUBLIC_KEY_PEM = publicKey;
	process.env.CI_PRIVATE_KEY_PEM = keys.private;

	// We now can use BunqClient.
	const bunq = new BunqClient(store);

	// run the bunq application with our API key
	await bunq.run(opts.apiKey, opts.permittedIPS, opts.environment, opts.encryptionKey)

	// install a new keypair 
	await bunq.install()

	// register this device
	await bunq.registerDevice(opts.deviceName)

	// register a new session
	await bunq.registerSession()

	return bunq
}

// Usage
setupBunq({
	encryptionKey: '3c7a4d431a846ed33a3bb1b1fa9b5c26',
	apiKey: '[YOUR API KEY]',
	deviceName: 'MyPhone',
	environment: 'SANDBOX',
	permittedIPS: [],
}).then((bunq) => {
	console.log('debug - Success!')
}).catch((error) => {
	console.error('debug - ERROR:', error)
})