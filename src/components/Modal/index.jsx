import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import {
  ModalContainer,
  MainContainer,
  CloseModalBox,
  StyledForm,
  TitleBox,
  DayBox,
  DayBoxTwo,
  ButtonBox,
} from "./style";
import { useModalController } from "../../providers/modalController";

const Modal = ({ handleModal, name }) => {
  const { setSelectedDays } = useModalController();

  const daysSchema = yup.object().shape({
    first: yup.string().optional(),
    second: yup.string().optional(),
    third: yup.string().optional(),
    fourt: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(daysSchema),
  });

  const handleData = (data) => {
    let newArray = [];
    newArray.push(data);
    let valuesArray = [];
    let emptyArray = [];

    newArray.forEach((i) => {
      i.first !== "false"
        ? valuesArray.push(i.first)
        : emptyArray.push("false");
      i.second !== "false"
        ? valuesArray.push(i.second)
        : emptyArray.push("false");
      i.third !== "false"
        ? valuesArray.push(i.third)
        : emptyArray.push("false");
      i.fourt !== "false"
        ? valuesArray.push(i.fourt)
        : emptyArray.push("false");
    });

    if (emptyArray.length === 4) {
      setSelectedDays(undefined);
    } else if (valuesArray.length >= 1) {
      valuesArray.sort((a, b) => {
        return a - b;
      });
      setSelectedDays(valuesArray);
    }
  };

  switch (name.toLowerCase()) {
    case "days":
      return (
        <MainContainer>
          <ModalContainer>
            <CloseModalBox>
              <button onClick={() => handleModal()}>X</button>
            </CloseModalBox>
            <StyledForm onSubmit={handleSubmit(handleData)}>
              <TitleBox>
                <h1>Dias</h1>
              </TitleBox>
              <DayBox>
                <span>30:</span>
                <Input
                  type="checkbox"
                  value="30"
                  name="first"
                  register={register}
                />
              </DayBox>
              <DayBox>
                <span>60:</span>
                <Input
                  type="checkbox"
                  value="60"
                  name="second"
                  register={register}
                />
              </DayBox>
              <DayBox>
                <span>90:</span>
                <Input
                  type="checkbox"
                  value="90"
                  name="third"
                  register={register}
                />
              </DayBox>
              <DayBoxTwo>
                <span>120:</span>
                <Input
                  type="checkbox"
                  value="120"
                  name="fourt"
                  register={register}
                />
              </DayBoxTwo>
              <ButtonBox>
                <button type="submit">selecionar</button>
              </ButtonBox>
            </StyledForm>
          </ModalContainer>
        </MainContainer>
      );
    default:
      return null;
  }
};
export default Modal;
