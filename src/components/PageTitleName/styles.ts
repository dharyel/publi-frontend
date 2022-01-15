import styled from 'styled-components';
import { colors } from '../../models/theme';

export const TitleName = styled.h1`

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.brandcolorPrimaryDefault};

    @media (max-width: 850px){
        margin-bottom: 20px;
    }
`;