import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { GroupsContext } from "../../Providers/groups";

import { Button, GroupCardContainer } from "../../Styles/global";

import AddActivityModal from "../AddActivityModal";
import EditActivityModal from "../EditActivityModal";

import EditGroupsModal from "../EditGroupsModal";

const GroupCard = ({ group }) => {
  const { searchGoals } = useContext(GoalsContext);
  const history = useHistory();

  const { subscribeGroups, unsubscribeGroups, removeActivity } =
    useContext(GroupsContext);
  const token = JSON.parse(localStorage.getItem("@Habits:token") || "");
  const [modalEdit, setModalEdit] = useState(false);

  const [modalAddAct, setModalAddAct] = useState(false);
  const [modalEditAct, setModalEditAct] = useState(false);

  const handleclickSubscribe = () => {
    subscribeGroups(group.id);
  };

  return (
    <GroupCardContainer>
      <p>
        <strong>Nome do grupo:</strong> {group.name}
      </p>
      <p>
        <strong>Categoria :</strong> {group.category}
      </p>
      <p>
        <strong>Descrição :</strong> {group.description}
      </p>
      <p>{group.id}</p>

      <p>
        <strong>Atividades:</strong> {group.description}
      </p>
      <Button onClick={() => setModalAddAct(true)}>Adicionar atividade</Button>
      <AddActivityModal
        setModalAddAct={setModalAddAct}
        modalAddAct={modalAddAct}
        token={token}
        id={group.id}
      />
      {group.activities.length > 0
        ? group.activities.map((act) => (
            <div>
              <p>Atividade: {act.title}</p>
              <p>Data: {act.realization_time}</p>
              <Button onClick={() => setModalEditAct(true)}>
                Editar atividade
              </Button>
              <Button onClick={() => removeActivity(act.id, token)}>
                Remover atividade
              </Button>
              <EditActivityModal
                setModalEditAct={setModalEditAct}
                modalEditAct={modalEditAct}
                token={token}
                id={act.id}
              />
            </div>
          ))
        : null}

      <Button onClick={() => handleclickSubscribe()}>Inscrever-se</Button>
      <Button onClick={() => setModalEdit(true)}>Editar grupo</Button>
      <Button onClick={() => unsubscribeGroups(group.id)}>
        Desinscrever-se
      </Button>
      <Button
        onClick={() => {
          searchGoals(group.id);
          history.push("/dashboard/goal");
        }}
      >
        Metas
      </Button>
      {modalEdit ? (
        <EditGroupsModal
          group_id={group.id}
          token={token}
          setModalEdit={setModalEdit}
          modalEditGroup={modalEdit}
        />
      ) : (
        false
      )}
    </GroupCardContainer>
  );
};

export default GroupCard;
