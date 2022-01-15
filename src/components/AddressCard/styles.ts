import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';
import { BiTrashAlt } from 'react-icons/bi';

import { colors } from '../../models/theme';

export const Container = styled.form`
    width: 100%;
    max-width: 1140px;
    height: 114px;
    margin: 0 auto;
    margin-top: 32px;
`;

export const Wrapper = styled.div`
    padding: 32px;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    background-color: ${colors.bgWhite};
    border-radius: 8px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddressInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AddressInfosTop = styled.div`
    margin-bottom: 16px;

    
`;

export const AddressInfosName = styled.h2`
    margin-right: 21px;
    display: inline-block;

    font-family: 'Inter', sans-serif;
    font-weight:700;
    font-size: 20px;

    color: ${colors.textcolorPrimary};
`;

export const EditIcon = styled(BsPencil)`
    margin-right: 11px;
    display: inline-block;
    font-size: 18px;

    cursor: pointer;
    color: ${colors.brandcolorPrimaryDefault};
`;

export const TrashIcon = styled(BiTrashAlt)`
    display: inline-block;
    font-size: 18px;

    cursor: pointer;
    color: ${colors.brandcolorPrimaryDefault};
`;

export const AddressInfosText = styled.p`
    width: 100%;

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
`;

export const AddressType = styled.div`
    padding: 8px 24px;

    border: 1px solid ${colors.brandcolorPrimaryLight};
    border-radius: 71px;

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 12px;

    cursor: default;
`;