import React, { useState } from "react";

const FuncionarioContext = React.createContext([{}, () => {}]);

const FuncionarioProvider = (props) => {
    const initialState = {
        id: null,
        name: "",
        role: "",
        salary: "",
    };
    const [funcionarioAtual, setFuncionarioAtual] = useState(initialState);

    return (
        <FuncionarioContext.Provider
            value={[funcionarioAtual, setFuncionarioAtual]}
        >
            {props.children}
        </FuncionarioContext.Provider>
    );
};

export { FuncionarioContext, FuncionarioProvider };
