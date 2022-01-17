import { useNavigate } from 'react-router-dom';
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

export const AddressCard = ( { id, addressCategory, addressName, addressData} : AddressCardProps) => {
    const addressText = `
        ${addressData.street}, ${addressData.number}, Bairro ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}
    `;

    const navigate = useNavigate();

    function handleGoToEditPage() {
        console.log(id);
        navigate('/edit');
    }


    return (
        <Container>
            <Wrapper>
                <AddressInfos>
                    <AddressInfosTop>
                        <AddressInfosName>{addressName}</AddressInfosName>
                        <EditIcon onClick={() => handleGoToEditPage()} />
                        <TrashIcon />
                    </AddressInfosTop>

                    <AddressInfosText>{addressText}</AddressInfosText>
                </AddressInfos>

                <AddressType>{addressCategory}</AddressType>
            </Wrapper>
        </Container>
    );
}