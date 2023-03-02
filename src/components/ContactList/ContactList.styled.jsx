import styled from '@emotion/styled';

export const ContactWrap = styled.div`
    display: flex;
    align-items: center;
    
     & p {
        margin-right: 10px;

     }

     & button {
        height: 25px;
        margin-right: 10px;
        // font-size: 20px;   
        border-radius: 5px;
        border: none;
        background-color: #03a9f45c;
        cursor: pointer;
       
       &:hover {
           box-shadow: 1px 3px 4px 1px rgb(0 0 0 / 50%);
           background-color: #3f9fcb5c;
       }
     }
`;