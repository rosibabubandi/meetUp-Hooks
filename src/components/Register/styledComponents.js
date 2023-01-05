import styled from 'styled-components'

export const RegisterHomePage = styled.div`
  height: 90vh;
  background-color: #ffffff;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const RegisterImage = styled.img`
  height: 60vh;
  width: 40vw;
  margin-right: 15px;
`
export const FormContainer = styled.form`
  height: 60vh;
  width: 40vw;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 40px;
  font-weight: normal;
`
export const LabelElement = styled.label`
  font-weight: 'Roboto';
  color: #334155;
  font-size: 18px;
  margin-top: 10px;
`
export const InputElement = styled.input`
  height: 35px;
  width: 70%;
  background-color: #ffffff;
  border: 1px solid #475569;
  border-radius: 7px;
  padding-left: 7px;
  font-family: 'Roboto';
  color: #334155;
  font-size: 15px;
  margin-top: 7px;
`
export const SelectElement = styled.select`
  height: 35px;
  width: 70%;
  background-color: #ffffff;
  border: 1px solid #475569;
  border-radius: 7px;
  padding-left: 7px;
  font-family: 'Roboto';
  color: #334155;
  font-size: 15px;
  margin-top: 7px;
`
export const OptionsElement = styled.option`
  font-family: 'Roboto';
  color: #334155;
  font-size: 15px;
`
export const RegisterNowButton = styled.button`
  height: 40px;
  width: 20%;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 300;
  margin-top: 7px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 18px;
  margin-top: 5px;
`
