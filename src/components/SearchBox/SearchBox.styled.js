import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 6px;
  right: 430px;
  align-items: center;
  padding: 10px 0px;
  z-index: 10;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 400px;
  /* margin-left: auto;
  margin-right: auto; */
  border: 2px solid #3f3f40;
  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 380px;
  height: 40px;
  padding: 0 10px 0 10px;
  font-size: 18px;
  /* background-color: #ffffff; */
  color: #000000;

  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  border: none;
  outline: none;
  :focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 50px;
  color: #000000;
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  border: 0;
  outline: none;
  :hover {
    color: #ffffff;
    background-color: #3f3f40;
  }
`;

export const Icon = styled(HiSearch)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  position: absolute;
  right: 6px;
`;
