import { AsyncStorage } from 'react-native'

export default class Store {
	data = {}
	constructor(name){
		this.storageKey = `store-${name}`;
	}
	async restoreFromMemory(){
		const data = await AsyncStorage.getItem(this.storageKey)
		this.data = typeof data === 'object' && data !== null ? data : {}
	}
	get(key){
		return this.data[key]
	}
	set(key, val){
		this.data[key] = val
		this.save()
	}
	del(key){
		delete this.data[key]
		this.save()
	}
	save(){
		AsyncStorage.setItem(this.storageKey, JSON.stringify(this.data))
	}
}