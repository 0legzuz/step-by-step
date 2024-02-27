import styled from "styled-components";
import Colors from "../../../AppStyles";

export const FormContainer = styled.div`
  width: 1000px;
  margin-top: 100px;
`;
export const FirstFormBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentImageBox = styled(ContentBox)``;

export const ContentHeaderBox = styled(ContentBox)``;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: 357px;
`;
export const StyledFileInput = styled.div`
  display: inline-block;
  position: relative;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewRow = styled.div`
  display: flex;
  align-items: center;
`;

export const PreviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

export const CustomFileLabel = styled.label`
  display: inline-block;
  padding: 9px;
  background-color: ${Colors.dark};
  color: ${Colors.light};
  cursor: pointer;
  width: 200px;
  &: hover {
    background-color: ${Colors.green};
  }
`;
export const ImageText = styled.p`
  display: block;
  margin: 9px;
  color: ${Colors.gray};
  font-size: 18px;
  font-weight: 600;
`;

export const ImagePreview = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-left: 10px;
`;

export const ShortDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const FormLabel = styled.div`
  margin: 9px;
  color: ${Colors.gray};
  font-size: 18px;
  font-weight: 600;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 9px;
  box-sizing: border-box;
  border: 2px solid;
  background-color: transparent;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  color: ${Colors.green};
  border-color: ${Colors.dark};
`;

export const FormTextArea = styled.textarea`
  padding: 9px;
  width: 100%;
  height: 300px;
  resize: none;
  border: 2px solid;
  background-color: transparent;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  color: ${Colors.green};
  border-color: ${Colors.dark};
`;

export const FormButton = styled.button`
  background-color: ${Colors.green};
  color: ${Colors.light};
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  padding: 9px;
  border: none;
  cursor: pointer;
  margin: 9px 9px 9px 0;
  width: auto;
  &:hover {
    background-color: ${Colors.dark};
  }
`;

export const DeleteButton = styled(FormButton)`
  background-color: ${Colors.red};
  font-size: 16px;
  padding: 9px;
  height: 40px;
  margin: 3px 0 0 0;
`;
