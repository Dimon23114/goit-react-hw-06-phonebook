import styled from '@emotion/styled';

export const ListContacts = styled.ul`
list-style: none;
padding: 0px;
`;

export const ButtonDel = styled.button`
min-width: 100px;
height: 40px;
margin-left: 16px;
font-size: 20px;
background-color: green;
color: #ffffff;
border: none;
border-radius: 4px;

&:hover,
&:focus {
    background-color: orange;
}
`