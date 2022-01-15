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

export const AddressCard = () => {
    return (
        <Container>
            <Wrapper>
                <AddressInfos>
                    <AddressInfosTop>
                        <AddressInfosName>Churrascaria do gaúcho</AddressInfosName>
                        <EditIcon />
                        <TrashIcon />
                    </AddressInfosTop>

                    <AddressInfosText>Rua Rui barbosa, 1000, Costa e Silva, Joinville - SC</AddressInfosText>
                </AddressInfos>

                <AddressType>Principal</AddressType>
            </Wrapper>
        </Container>
    );
}