import { useState } from 'react';
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
    ButtonWrapper,
} from './styles';

interface ViaCepData{
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
}

export const AddAddressCenter = () => {
    const navigate = useNavigate();
    
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

    async function handleSaveNewAddress (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let newAddress: AddressTypes = {
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

        const resp = await Axios.post(
            `/address/`, 
            JSON.stringify(newAddress), 
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

    async function loadCepData(){
        
        try{
            let resp = await fetch(`https://viacep.com.br/ws/${inputPostalCode}/json/`);
            let data: ViaCepData = await resp.json();

            setInputStreet(data.logradouro);
            setInputNeighborhood(data.bairro);
            setInputCity(data.localidade);
            setInputState(data.uf);

            console.log(data);
        } catch (err){
            console.log("Ocorreu o erro: " + err);
        }
    }

    return(
        <Container>
            <WrapperForm onSubmit={(e) => handleSaveNewAddress(e)}>
                <EditAddressWrapper>
                    <InfosText>Informações</InfosText>
                    <InputWrapper>
                        <AddressCategorySelect name="categorySelect" onChange={(e) => handleSelectInputChange(e.target.value)} >
                            {
                                categories.map((category, index) => {
                                    return (<AddressCategoryOption key={index} value={category}>{category}</AddressCategoryOption>)
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
                            onBlur={loadCepData}
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

                    <ButtonWrapper>
                        <Button 
                            text="Cadastrar"
                            margin="40px 0px 0px 0px"
                        />
                    </ButtonWrapper>
                </EditAddressWrapper>
            </WrapperForm>
        </Container>
    );
}