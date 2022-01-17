import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { colors } from '../../models/theme';

export const Container = styled.form`
    width: 100%;
    max-width: 1140px;
    height: 52px;

    @media (max-width: 850px) {
        padding: 0px 32px;
    }
`;

export const Search = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 2px solid ${colors.outlineGrayDark};
`;

export const Icon = styled(FiSearch)`
    position: relative;
    left: 1px;

    cursor: pointer;
    font-size: 13px;
    color: ${colors.textcolorPrimary};

    :hover {
        filter: brightness(0.5);
    }
`;

export const SearchInput = styled.input.attrs({
    placeholder: 'Buscar',
})`
    padding: 20px 32px 20px 16px;
    
    width: 100%; 
    max-width: 1140px;
    height: 52px;
    
    border: 0px;
    background-color: transparent;
    color: ${colors.textcolorPrimary};

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;

    ::placeholder {
        color: ${colors.textcolorPrimary};
    }

    :focus{
        outline: none;
    }
`;