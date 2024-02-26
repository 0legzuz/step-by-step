import React, { useState } from "react";
import { createCard, uploadImage } from "../../../api";
import HeaderComponent from "../../../components/Header/Header";
import Colors, { Container } from "../../../AppStyles";
import { CenteredContainer } from "../../../components/GridCards/GridCards.tsx/GridCardsStyles";
import * as S from "./NewCardPageStyles";

interface FormProps {
  onSubmit: () => void;
}

interface FormData {
  preview_image: string;
  access_required: boolean;
  title: string;
  description: string;
  content: Array<{
    type: string;
    data: string | { preview_image: string; selectedFile: File };
  }>;
  images_id: string[];
}

interface FileState {
  selectedFile: File | null;
}

const CardForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [fileStates, setFileStates] = useState<
    Array<{ selectedFile: File | null }>
  >([]);
  const [formData, setFormData] = useState<FormData>({
    preview_image: "",
    access_required: true,
    title: "",
    description: "",
    content: [{ type: "text", data: "" }],
    images_id: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newContent = [...formData.content];
    newContent[index].data = e.target.value;
    setFormData({ ...formData, content: newContent });
  };

  const handleAddHeader = () => {
    setFormData({
      ...formData,
      content: [...formData.content, { type: "header", data: "" }],
    });
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      content: [...formData.content, { type: "image", data: "" }],
    });
  };

  const handleAddContent = () => {
    setFormData({
      ...formData,
      content: [...formData.content, { type: "text", data: "" }],
    });
  };

  const handleRemoveContent = (index: number) => {
    const newContent = [...formData.content];
    newContent.splice(index, 1);
    setFormData({ ...formData, content: newContent });
  };

 const handleImageUpload = async (
   type: string,
   e: React.ChangeEvent<HTMLInputElement>,
   formIndex: number
 ) => {
   const file = e.target.files?.[0];
   const currentAccessToken = localStorage.getItem("token");
   const currentTokenType = "Bearer";

   if (file) {
     try {
       const imageUrl = await uploadImage(
         file,
         currentAccessToken,
         currentTokenType
       );

       const updatedFileStates = [...fileStates];
       updatedFileStates[formIndex] = { selectedFile: file };
       setFileStates(updatedFileStates);

       if (type === "preview") {
         setFormData((prevFormData) => ({
           ...prevFormData,
           preview_image: imageUrl,
         }));
       } else {
         setFormData((prevFormData) => {
           const updatedContent = [...prevFormData.content];
           updatedContent[formIndex] = {
             type: "image",
             data: { preview_image: imageUrl, selectedFile: file },
           };
           return {
             ...prevFormData,
             content: updatedContent,
           };
         });
       }
     } catch (error) {
       console.error(error.message);
     }
   }
 };

  const handleCreateCard = async () => {
    const currentAccessToken = localStorage.getItem("token");
    const currentTokenType = "Bearer";

    try {
      await createCard(formData, currentAccessToken, currentTokenType);
      onSubmit();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <CenteredContainer>
        <HeaderComponent></HeaderComponent>

        <S.FormContainer>
          <form onSubmit={handleCreateCard}>
            <S.FirstFormBlock>
              <S.Name>
                <S.FormLabel>Название:</S.FormLabel>
                <S.FormInput
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <S.FormLabel>Превью:</S.FormLabel>
                <S.StyledFileInput>
                  <S.FileInput
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload("preview", e, 0)}
                  />
                  <S.CustomFileLabel htmlFor="imageInput">
                    Выберите изображение
                  </S.CustomFileLabel>
                  {fileStates[0]?.selectedFile && (
                    <S.ImagePreview
                      src={URL.createObjectURL(fileStates[0]?.selectedFile)}
                      alt="Preview"
                    />
                  )}
                  {fileStates[0]?.selectedFile ? (
                    <S.ImageText style={{ color: `${Colors.green}` }}>
                      {" "}
                      Файл {fileStates[0]?.selectedFile.name} загружен
                    </S.ImageText>
                  ) : (
                    <S.ImageText style={{ color: `${Colors.red}` }}>
                      Файл не загружен
                    </S.ImageText>
                  )}
                </S.StyledFileInput>
              </S.Name>

              <S.ShortDescription>
                <S.FormLabel>Краткое описание:</S.FormLabel>
                <S.FormTextArea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </S.ShortDescription>
            </S.FirstFormBlock>

            {formData.content.map((contentItem, index) =>
              contentItem.type === "text" ? (
                <S.ContentBox key={index}>
                  <S.FormRow>
                    <S.FormLabel>Содержание:</S.FormLabel>
                    {index !== 0 ? (
                      <S.DeleteButton
                        type="button"
                        onClick={() => handleRemoveContent(index)}>
                        Удалить
                      </S.DeleteButton>
                    ) : null}
                  </S.FormRow>
                  <S.FormTextArea
                    value={contentItem.data}
                    onChange={(e) => handleContentChange(index, e)}
                  />
                </S.ContentBox>
              ) : contentItem.type === "image" ? (
                <S.ContentImageBox key={index}>
                  <S.FormRow>
                    <S.FormLabel>Изображение:</S.FormLabel>
                    <S.DeleteButton
                      type="button"
                      onClick={() => handleRemoveContent(index)}>
                      Удалить
                    </S.DeleteButton>
                  </S.FormRow>
                  <S.StyledFileInput>
                    <S.FileInput
                      id={`imageInput_${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload("image", e, index)}
                    />
                    <S.CustomFileLabel htmlFor={`imageInput_${index}`}>
                      Выберите изображение
                    </S.CustomFileLabel>
                    {fileStates[index]?.selectedFile && (
                      <S.ImagePreview
                        src={URL.createObjectURL(
                          fileStates[index]?.selectedFile
                        )}
                        alt="Preview"
                      />
                    )}
                    {fileStates[index]?.selectedFile ? (
                      <S.ImageText style={{ color: `${Colors.green}` }}>
                        {" "}
                        Файл {fileStates[index]?.selectedFile.name} загружен
                      </S.ImageText>
                    ) : (
                      <S.ImageText style={{ color: `${Colors.red}` }}>
                        Файл не загружен
                      </S.ImageText>
                    )}
                  </S.StyledFileInput>
                </S.ContentImageBox>
              ) : contentItem.type === "header" ? (
                <S.ContentHeaderBox key={index}>
                  <S.FormRow>
                    <S.FormLabel>Заголовок:</S.FormLabel>
                    <S.DeleteButton
                      type="button"
                      onClick={() => handleRemoveContent(index)}>
                      Удалить
                    </S.DeleteButton>
                  </S.FormRow>
                  <S.FormInput
                    type="text"
                    value={contentItem.data}
                    onChange={(e) => handleContentChange(index, e)}
                  />
                </S.ContentHeaderBox>
              ) : null
            )}

            <S.FormButton type="button" onClick={handleAddContent}>
              Добавить содержание
            </S.FormButton>
            <S.FormButton type="button" onClick={handleAddHeader}>
              Добавить заголовок
            </S.FormButton>
            <S.FormButton type="button" onClick={handleAddImage}>
              Добавить картинку
            </S.FormButton>

            <S.FormButton type="button" onClick={handleCreateCard}>
              Создать карточку
            </S.FormButton>
          </form>
        </S.FormContainer>
      </CenteredContainer>
    </Container>
  );
};

export default CardForm;
