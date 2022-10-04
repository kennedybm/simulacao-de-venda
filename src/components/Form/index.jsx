import { useState } from "react";
import {
  StyledForm,
  ModalBox,
  ModalContainer,
  ButtonBox,
  FormButton,
  ModalButton,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { useModalController } from "../../providers/modalController";
import { useSimulation } from "../../providers/simulation";
import Modal from "../../components/Modal";

const Form = ({ name }) => {
  const { selectedDays, toggleModal, handleModal } = useModalController();
  const { handleSimulation } = useSimulation();
  const [values, setValues] = useState({ amount: "" });

  const currencyMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
    e.target.value = value;
    return e;
  };

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const simulationSchema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installments: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9]*$/, "Apenas números"),
    mdr: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9]*$/, "Apenas números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(simulationSchema),
  });

  const handleRequestObj = (data) => {
    let toModify = values.amount;
    let modified = "";
    let requestObj = {};

    if (selectedDays !== undefined) {
      if (toModify[6] && toModify[7] === "0") {
        modified = toModify.substring(0, 5);
        modified = parseInt(modified.replace(/[\D]+/g, ""));
        requestObj = {
          amount: modified,
          installments: parseInt(data.installments),
          mdr: parseInt(data.mdr),
          days: selectedDays,
        };
      } else if (toModify[6] || toModify[7] > "0") {
        modified = parseInt(toModify.replace(/[^\d]+/g, ""));
        requestObj = {
          amount: modified,
          installments: parseInt(data.installments),
          mdr: parseInt(data.mdr),
          days: selectedDays,
        };
      }
    } else if (selectedDays === undefined) {
      if (toModify[6] && toModify[7] === "0") {
        modified = toModify.substring(0, 5);
        modified = parseInt(modified.replace(/[\D]+/g, ""));
        requestObj = {
          amount: modified,
          installments: parseInt(data.installments),
          mdr: parseInt(data.mdr),
        };
      } else if (toModify[6] || toModify[7] > "0") {
        modified = parseInt(toModify.replace(/[^\d]+/g, ""));
        requestObj = {
          amount: modified,
          installments: parseInt(data.installments),
          mdr: parseInt(data.mdr),
        };
      }
    }

    handleSimulation(requestObj);
  };

  switch (name.toLowerCase()) {
    case "simulation":
      return (
        <>
          {toggleModal && <Modal handleModal={handleModal} name="days" />}
          <StyledForm onSubmit={handleSubmit(handleRequestObj)}>
            {!!errors.amount && <span>{errors.amount.message}</span>}
            <span>informe o valor da venda*</span>
            <Input
              type="text"
              placeholder="R$"
              name="amount"
              value={values.amount}
              onChange={(e) => handleValues(currencyMask(e))}
              register={register}
            />
            {!!errors.installments && (
              <span>{errors.installments.message}</span>
            )}
            <span>em quantas parcelas*</span>
            <Input
              type="text"
              placeholder="Parcelas"
              name="installments"
              register={register}
            />
            {!!errors.mdr && <span>{errors.mdr.message}</span>}
            <span>informe o percentual de MDR*</span>
            <Input
              type="text"
              placeholder="MDR"
              name="mdr"
              register={register}
            />

            <ModalContainer>
              <span>informe os dias(opcional)*</span>
              <ModalBox>
                <ModalButton onClick={() => handleModal()}>+</ModalButton>
              </ModalBox>
            </ModalContainer>

            <ButtonBox>
              <FormButton type="submit">simular</FormButton>
            </ButtonBox>
          </StyledForm>
        </>
      );

    default:
      return null;
  }
};
export default Form;
