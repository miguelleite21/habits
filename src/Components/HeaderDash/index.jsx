import { FiMenu } from "react-icons/fi";
import { HeaderDashboard, BoxHeaderDashboard, Header } from "./style";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ImExit } from "react-icons/im";

export const HeaderDash = () => {
  const [isTrueMobile, setIsTrueModal] = useState(false);

  let token = localStorage.getItem("@Habits:token");

  const history = useHistory();

  const handleExit = () => {
    localStorage.clear();
    history.push("/login");
  };

  console.log(token);
  return (
    <>
      <Header>
        <HeaderDashboard>
          <BoxHeaderDashboard isTrueMobile={isTrueMobile}>
            <nav className="mobile">
              <div
                className="bars"
                onClick={() => setIsTrueModal(!isTrueMobile)}
              >
                <FiMenu />
              </div>

              <h2>Usuário</h2>

              <div className="modal">
                <ul>
                  <Link className="link" to="/dashboard">
                    <li>Hábitos</li>
                  </Link>

                  <Link className="link" to="/dashboard/groups">
                    <li>Grupos</li>
                  </Link>

                  <Link className="link" onClick={() => handleExit()}>
                    <li>
                      <p>
                        <ImExit />
                      </p>
                      <p>Sair</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>

            <nav className="desktop">
              <h2>Usuário</h2>
              <ul>
                <Link className="link" to="/dashboard">
                  <li>Hábitos</li>
                </Link>

                <Link className="link" to="/dashboard/groups">
                  <li>Grupos</li>
                </Link>

                <Link className="link" onClick={() => handleExit()}>
                  <li>
                    <p>
                      <ImExit />
                    </p>
                    <p>Sair</p>
                  </li>
                </Link>
              </ul>
            </nav>
          </BoxHeaderDashboard>
        </HeaderDashboard>
      </Header>
    </>
  );
};