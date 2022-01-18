import { useNavigate } from 'react-router-dom';
import { AddressTypes } from '../../models/address';
import { Axios } from '../../services/axios';
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
    getSavedAddresses(): Promise<void>
}

export const AddressCard = ( { id, addressCategory, addressName, addressData, getSavedAddresses} : AddressCardProps) => {
    const addressText = `
        ${addressData.street}, ${addressData.number}, Bairro ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}
    `;

    const navigate = useNavigate();

    function handleGoToEditPage() {
        console.log(id);
        localStorage.setItem('currentEditCardId', `${id}`);
        navigate('/edit');
    }

    async function handleDeleteAddress(){
        const resp = await Axios.delete(`/address/${id}`);
        getSavedAddresses();
        console.log(resp);
    }

    return (
        <Container>
            <Wrapper>
                <AddressInfos>
                    <AddressInfosTop>
                        <AddressInfosName>{addressName}</AddressInfosName>
                        <EditIcon onClick={() => handleGoToEditPage()} />
                        <TrashIcon onClick={() => handleDeleteAddress()} />
                    </AddressInfosTop>

                    <AddressInfosText>{addressText}</AddressInfosText>
                </AddressInfos>

                <AddressType>{addressCategory}</AddressType>
            </Wrapper>
        </Container>
    );
}