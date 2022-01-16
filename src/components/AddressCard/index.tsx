import { AddressTypes } from '../../models/address';
import { 
    Container, 
    Wrapper,
    AddressInfos,
    AddressInfosTop,
    AddressInfosName,
    EditIcon,
    TrashIcon,
    AddressInfosText,
    AddressType, 
} from './styles';

interface AddressCardProps extends AddressTypes {
    
}

export const AddressCard = ( {addressCategory, addressName, addressData} : AddressCardProps) => {
    const addressText = `
        ${addressData.street}, ${addressData.number}, Bairro ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}
    `;
    return (
        <Container>
            <Wrapper>
                <AddressInfos>
                    <AddressInfosTop>
                        <AddressInfosName>{addressName}</AddressInfosName>
                        <EditIcon />
                        <TrashIcon />
                    </AddressInfosTop>

                    <AddressInfosText>{addressText}</AddressInfosText>
                </AddressInfos>

                <AddressType>{addressCategory}</AddressType>
            </Wrapper>
        </Container>
    );
}