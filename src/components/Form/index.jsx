import { useState } from "react";
import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";

const Form = ({ name }) => {
  const [values, setValues] = useState({ amount: "" });
  const [selectedDays, setSelectDays] = useState([]);

  const simulationSchema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installment: yup
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

  const handleSimulation = (data) => {
    let toModify = values.amount;
    let modified = "";
    let requestObj = {};

    if (toModify[6] && toModify[7] === "0") {
      modified = toModify.substring(0, 5);
      modified = parseInt(modified.replace(/[\D]+/g, ""));
      requestObj = {
        amount: modified,
        installment: parseInt(data.installment),
        mdr: parseInt(data.mdr),
      };
    }
    //criar o modal de array (days)
    console.log(toModify);
    console.log(modified);
    console.log(requestObj);
  };

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

  switch (name.toLowerCase()) {
    case "simulation":
      return (
        <>
          <StyledForm onSubmit={handleSubmit(handleSimulation)}>
            {!!errors.amount && <span>{errors.amount.message}</span>}
            <Input
              type="text"
              placeholder="R$"
              name="amount"
              value={values.amount}
              onChange={(e) => handleValues(currencyMask(e))}
              register={register}
            />
            {!!errors.installment && <span>{errors.installment.message}</span>}
            <Input
              type="text"
              placeholder="Installments"
              name="installment"
              register={register}
            />
            {!!errors.mdr && <span>{errors.mdr.message}</span>}
            <Input
              type="text"
              placeholder="MDR"
              name="mdr"
              register={register}
            />
            <button>enviar</button>
          </StyledForm>
        </>
      );

    default:
      return null;
  }
};
export default Form;

{
  /* <div name="modal">
<label>30:</label>
<Input
  type="checkbox"
  placeholder="MDR"
  name="days"
  value="30"
  register={register}
/>
<label>60:</label>
<Input
  type="checkbox"
  placeholder="MDR"
  name="days"
  value="60"
  register={register}
/>
<label>90:</label>
<Input
  type="checkbox"
  placeholder="days"
  name="days"
  value="90"
  register={register}
/>
</div> */
}

// --data '{
// "amount": 15000,
// "installments": 3,
// "mdr": 4
// }'
