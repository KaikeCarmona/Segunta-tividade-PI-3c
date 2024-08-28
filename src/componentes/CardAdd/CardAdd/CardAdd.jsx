import { useState } from "react";
import "./styles.css";
import CardView from "../../Card/Card";

export default function Card() {
  const [inputValue, setInputValue] = useState("");
  const [atividadeArray, setAtividadeArray] = useState([]);

  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //salva os dados do formulario dentro do array atividadeArray
  const handleSave = () => {
    // Verifica se o input está vazio ou contém apenas espaços
    if (inputValue.trim()=== "") {
      alert("Por favor, digite o nome da atividade."); // Mensagem opcional
      return; // Para a execução da função se o input estiver vazio
    }

    const newAtividade = {
      name: inputValue,
      checked: false, // Inicialmente desmarcado
    };

    setAtividadeArray([...atividadeArray, newAtividade]);
    setInputValue("");
  };

  const toggleCheckbox = (index) => {
    const newArray = atividadeArray.map((atividade, i) => {
      if (i === index) {
        return { ...atividade, checked: !atividade.checked }; // Inverte o estado do checkbox
      }
      return atividade;
    });
    setAtividadeArray(newArray);
  };

  // função callback que sera enviada ao componente filho para deletar uma atividade
  const handleRemove = (index) => {
    const newArray = atividadeArray.filter((_, i) => i !== index);
    setAtividadeArray(newArray);
  };

  //função que recebe os dados do formulario e chama a função handleSave para salvar no array
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o envio padrão do formulário
    handleSave();
  };

  return (
    <div id="container">
      <div className="container2">
        {/* Seção para adicionar uma atividade a todo*/}
        <section className="AddCard">
          <h1>Todo - List 📋</h1>
          {/* formulario submete (envia) os dados de dentro do input quando clicarmos no botao  */}
          <form onSubmit={handleSubmit}>
            {/* input envia o valor dentro dele (capturado pela função "handlechange") */}
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Nome da atividade"
            />
            {/* botao tipo submit submete um formulatio*/}
            <button type="submit">Add</button>
          </form>
        </section>

        {/* Visualização das atividades da todo */}
        {atividadeArray.map((atividade, index) => (
          <CardView
            key={index}
            //passando propriedade nome e estado da atividade para o elemento filho
            name={atividade.name}
            checked={atividade.checked}
            // passando funções callback para o elemento filho
            onRemove={() => handleRemove(index)}
            onToggle={() => toggleCheckbox(index)}
          />
        ))}
      </div>
    </div>
  );
}
