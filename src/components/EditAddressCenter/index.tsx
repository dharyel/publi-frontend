import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Axios } from '../../services/axios';
import { AddressTypes, AddressCategoryTypes } from '../../models/address';
import { useNavigate } from 'react-router-dom';

import { 
    Container,
    WrapperForm,
    EditAddressWrapper,
    InfosText,
    InputWrapper,
    AddressCategorySelect,
    AddressCategoryOption,
    HorizontalRowInput,
    AddressInput,
} from './styles';

export const EditAddressCenter = () => {
    const navigate = useNavigate();
    const selectedEditCardId = Number(localStorage.getItem('currentEditCardId'));
    const [addressInfo, setAddressInfo] = useState({} as AddressTypes);
    const categories = ['Principal','Residencial','Comercial','Férias'];
  
    const [inputCategory, setInputCategory] = useState<AddressCategoryTypes>('Principal');
    const [inputAddressName, setInputAddressName] = useState('');
    const [inputPostalCode, setInputPostalCode] = useState('');
    const [inputStreet, setInputStreet] = useState('');
    const [inputNeighborhood, setInputNeighborhood] = useState('');
    const [inputCity, setInputCity] = useState('');
    const [inputState, setInputState] = useState('');
    const [inputNumber, setInputNumber] = useState('');

    function handleSelectInputChange(value: any){
        setInputCategory(value);
    }

    function handleAddressNameInputChange(value: string){
        setInputAddressName(value);
    }

    function handlePostalCodeInputChange(value: string){
        setInputPostalCode(value);
    }
    
    function handleStreetInputChange(value: string){
        setInputStreet(value);
    }

    function handleNeighborhoodInputChange(value: string){
        setInputNeighborhood(value);
    }

    function handleCityInputChange(value: string){
        setInputCity(value);
    }

    function handleStateInputChange(value: string){
        setInputState(value);
    }

    function handleNumberInputChange(value: string){
        setInputNumber(value);
    }

    useEffect (() => {
        async function loadCardInfos(){
            const resp = await Axios.get<AddressTypes>(`/address/${selectedEditCardId}`);
            setAddressInfo(resp.data);
        }

        loadCardInfos();
    }, [selectedEditCardId]);

    useEffect(() => {
        setInputCategory(addressInfo?.addressCategory);
        setInputAddressName(addressInfo?.addressName);
        setInputPostalCode(addressInfo?.addressData?.postalCode);
        setInputStreet(addressInfo?.addressData?.street);
        setInputNeighborhood(addressInfo?.addressData?.neighborhood);
        setInputCity(addressInfo?.addressData?.city);
        setInputState(addressInfo?.addressData?.state);
        setInputNumber(addressInfo?.addressData?.number);

    }, [addressInfo]);

    async function handleSaveEditAddress (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let updatedAddress: AddressTypes = {
            addressCategory: inputCategory,
            addressName: inputAddressName,
            addressData: {
                city: inputCity,
                neighborhood: inputNeighborhood,
                number: inputNumber,
                postalCode: inputPostalCode,
                state: inputState,
                street: inputStreet,
            }
        };

        const resp = await Axios.put(
            `/address/${selectedEditCardId}`, 
            JSON.stringify(updatedAddress), 
            {
                 "headers": { 'Content-Type': 'application/json'}
            }
        );
        if (resp){
            console.log(resp);
            navigate('/');
        } else {
            console.log('Houve um erro na requisição de editar endereço!');
        }
        
    }

    return(
        <Container>
            {addressInfo &&
            <WrapperForm onSubmit={(e) => handleSaveEditAddress(e)}>
                <EditAddressWrapper>
                    <InfosText>Informações</InfosText>
                    <InputWrapper>
                        <AddressCategorySelect name="categorySelect" onChange={(e) => handleSelectInputChange(e.target.value)} >
                            {addressInfo &&
                                categories.map((category, index) => {
                                    if (addressInfo.addressCategory === category){
                                        return (<AddressCategoryOption key={index} selected value={category}>{category}</AddressCategoryOption>)
                                    } else {
                                        return (<AddressCategoryOption key={index} value={category}>{category}</AddressCategoryOption>)
                                    }
                                    
                                })
                            }
                        </AddressCategorySelect>
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Nome do endereço"
                            name="addressName" 
                            value={inputAddressName} 
                            onChange={(e) => handleAddressNameInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="CEP"
                            name="postalCode" 
                            value={inputPostalCode}  
                            onChange={(e) => handlePostalCodeInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Rua"
                            name="street" 
                            value={inputStreet}  
                            onChange={(e) => handleStreetInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Bairro"
                            name="neighborhood" 
                            value={inputNeighborhood}  
                            onChange={(e) => handleNeighborhoodInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Cidade"
                            name="city" 
                            value={inputCity}  
                            onChange={(e) => handleCityInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Estado"
                            name="state" 
                            value={inputState}   
                            onChange={(e) => handleStateInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                    <InputWrapper>
                        <AddressInput 
                            type="text" 
                            placeholder="Número"
                            name="number" 
                            value={inputNumber}   
                            onChange={(e) => handleNumberInputChange(e.target.value)}
                        />
                        <HorizontalRowInput />
                    </InputWrapper>
                </EditAddressWrapper>

                <Button 
                    text="Editar"
                />
            </WrapperForm>

            }
        </Container>
    );
}