import styled from 'styled-components';

interface FormControlProps {
  height?: string;
  margin?: string;
}

export const InputStyled = styled.input<FormControlProps>`
  background: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border: 1px solid #A2A2A2;
  padding: 8px;  
  width: 100%;
  height: ${(p: FormControlProps) => p.height};
`;

export const LabelStyled = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #a2a2a2;
  padding: 8px;
`;

export const FormControl = styled.div<FormControlProps>`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border: 0;
  width: 100%;
  border-radius: 4px;
  :focus {
    outline: 2px solid #81a2e9
  }
  height: ${(p: FormControlProps) => p.height};
  margin: ${(p: FormControlProps) => p.margin};
`;
