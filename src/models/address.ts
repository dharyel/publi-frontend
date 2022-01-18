interface AddressDataTypes{
    postalCode: string;
    street: string;
    number: string;
    neighborhood: string;
    state: string;
    city: string;
}

export type AddressCategoryTypes = 'Principal' | 'Residencial' | 'Comercial' | 'Férias';

export interface AddressTypes{
    id?: number;
    addressCategory: AddressCategoryTypes;
    addressName: string;
    addressData: AddressDataTypes;
}

