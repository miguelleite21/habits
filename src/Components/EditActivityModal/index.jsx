import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";

import { Modal } from "@mui/material";
import { GroupsForm } from "../../Styles/global";

const EditActivityModal = ({
  id,
  token,
  setModalEditAct,
  modalEditAct,
  group_id,
}) => {
  const { editActivity } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModalEditAct(false);
  };

  const onSubmit = (data) => {
    editActivity(id, data, reset, closeModal, group_id);
  };

  return (
    <Modal open={modalEditAct}>
      <div>
        <h3>Editar Atividade</h3>
        <GroupsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome da atividade"
            {...register("title")}
          />
          <button type="submit">Editar</button>
        </GroupsForm>
        <button onClick={() => closeModal()}>FECHAR</button>
      </div>
    </Modal>
  );
};

export default EditActivityModal;
