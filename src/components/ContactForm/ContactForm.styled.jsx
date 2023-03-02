import styled from '@emotion/styled';


export const ContactFormWrap = styled.form`
    display:flex;
    flex-direction: column;
    align-items: left;
    width: 360px;
`

export const InputWrap = styled.input`
    margin: 10px 0;
    height: 30px; 
`

export const Button = styled.button`
//  padding: 20px 30px;
//  font-size: 20px;   
    height: 40px;  
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: #48c24d85;
    cursor: pointer;

    &: hover {
        box-shadow: 1px 3px 4px 1px rgb(0 0 0 / 50%);
        background-color: #48ad4c85;
}
`