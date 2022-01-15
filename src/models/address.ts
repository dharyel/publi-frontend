interface AddressDataTypes{
    postalCode: string;
    street: string;
    number: string;
    neighborhood: string;
    state: string;
    city: string;
}

type MainAddressTypes = 'Principal' | 'Residencial' | 'Comercial' | 'Férias';

export interface AddressTypes{
    mainAddress: MainAddressTypes;
    addressName: string;
    adressData: AddressDataTypes;
}

