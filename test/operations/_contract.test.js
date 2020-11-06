export const bytecode = '60806040526000805534801561001457600080fd5b506040516020806105168339810180604052810190808051906020019092919050505080600081905550506104c88061004e6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1a7d4d14610078578063506ef65c146100b957806386be3f80146100e45780639b96eece14610125578063d0e30db01461017c575b61007561019a565b50005b34801561008457600080fd5b506100a3600480360381019080803590602001909291905050506102a5565b6040518082815260200191505060405180910390f35b3480156100c557600080fd5b506100ce610439565b6040518082815260200191505060405180910390f35b3480156100f057600080fd5b5061010f60048036038101908080359060200190929190505050610442565b6040518082815260200191505060405180910390f35b34801561013157600080fd5b50610166600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610453565b6040518082815260200191505060405180910390f35b61018461019a565b6040518082815260200191505060405180910390f35b60008034111515610213576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f6e6f2076616c756500000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561035e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f696e73756666696369656e742066756e6473000000000000000000000000000081525060200191505060405180910390fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156103f1573d6000803e3d6000fd5b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054905090565b600081600081905550819050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820ea02f1011dcf74eb605c58e822d1d73678e0a3538dab72ed89ef239138f67ddd0029';

export const abi = [{
	inputs: [{ name: '_variable', type: 'uint256' }],
	payable: false,
	stateMutability: 'nonpayable',
	type: 'constructor'
}, {
	constant: true,
	inputs: [{ name: '', type: 'address' }],
	name: 'balance',
	outputs: [{ name: '', type: 'uint256' }],
	payable: false,
	stateMutability: 'view',
	type: 'function'
}, {
	constant: true,
	inputs: [],
	name: 'variable',
	outputs: [{ name: '', type: 'uint256' }],
	payable: false,
	stateMutability: 'view',
	type: 'function'
}, {
	constant: true,
	inputs: [],
	name: 'getVariable',
	outputs: [{name: '', type: 'uint256'}],
	payable: false,
	stateMutability: 'view',
	type: 'function'
}, {
	constant: false,
	inputs: [{ name: 'newValue', type: 'uint256' }],
	name: 'setVariable',
	outputs: [{ name: '', type: 'uint256' }],
	payable: false,
	stateMutability: 'nonpayable',
	type: 'function'
}, {
	constant: false,
	inputs: [],
	name: 'deposit',
	outputs: [{ name: '', type: 'uint256' }],
	payable: true,
	stateMutability: 'payable',
	type: 'function'
}, {
	constant: false,
	inputs: [{ name: 'value', type: 'uint256' }],
	name: 'withdraw',
	outputs: [{ name: '', type: 'uint256' }],
	payable: false,
	stateMutability: 'nonpayable',
	type: 'function'
}];