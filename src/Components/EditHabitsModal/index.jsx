import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { HabitsContext } from "../../Providers/habits";

import { Modal } from "@mui/material";
import { HabitsForm } from "../../Styles/global";

const EditHabitsModal = ({ habit_id, token, setModalEdit, modalEdit }) => {
  const { editHabits } = useContext(HabitsContext);

  const schema = yup.object().shape({
    achieved: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalEdit(false);
  };

  const onSubmit = (data) => {
    editHabits(habit_id, data, token, reset, closeModal);
  };

  return (
    <Modal open={modalEdit}>
      <div>
        <h3>Editar Hábito</h3>
        <HabitsForm onSubmit={handleSubmit(onSubmit)}>
          <select {...register("achieved")}>
            <option value="">Tarefa completada?</option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </select>
          <h4>Progresso atual:</h4>
          <input
            type="number"
            placeholder="Progresso"
            {...register("how_much_achieved")}
          />
          <button type="submit">Editar</button>
        </HabitsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default EditHabitsModal;