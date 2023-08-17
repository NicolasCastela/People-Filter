import { useState } from 'react'
import styles from './Todolist.module.css'
import Select from 'react-select'

export default function Todolist(){

    const [nome, setNome] = useState('');
    const [idade, SetIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [destaque, setDestaque] = useState([]);
    const [pessoa, setPessoa] = useState([])
    const url = 'https://via.placeholder.com/200'

    const nomeOptions = pessoa.map((pessoa) => ({
        value: pessoa.nome,
        label: pessoa.nome,
      }));

function criarpessoa(){
    if (!nome || !idade || !cidade){
        return;
    }
    setPessoa([...pessoa, { nome: nome, idade: idade, cidade:cidade}])
    setNome('');
    SetIdade('');
    setCidade('');
    
}
function deletarpessoa(index){
    const colocandoindex = pessoa.filter((e, i)=> i !== index);
    setPessoa(colocandoindex)
}

function deletarDestaque(index){
    const novaLista = destaque.filter((e, i)=> i !== index);
    setDestaque(novaLista)
}

function moverparadestaque(index){
    const pessoaSelecionada = pessoa[index];
    const novaLista = pessoa.filter((e, i)=> i !== index);
    setPessoa(novaLista);
    setDestaque([...destaque, pessoaSelecionada])
}

    return(
        <div className={styles.bodytodo}>
            <div className={styles.escritas}>
               <div className={styles.titulo}><h1>Cadastro</h1>
               </div> 
               <input className={styles.digite} onChange={(e)=> setNome(e.target.value)} value={nome} placeholder="Nome"></input>
               <input className={styles.digite} onChange={(e) => SetIdade(e.target.value)} value={idade} placeholder="Idade"></input>
               <input className={styles.digite}  onChange={(e)=> setCidade(e.target.value)} value={cidade} placeholder="Cidade"></input>
               <button className={styles.botao123} onClick={criarpessoa}> Adicionar</button>
            </div>
            <div className={styles.resultados}>
            <h1>Pessoas Em Destaque</h1>
                <div className={styles.superiorresultados}>
                    {/* MAP DO PESSOAS EM DESTAQUE AO SER SELECIONADA */}
                {destaque?.map((card, index) => (
                    <div className={styles.nomedecada} key={index}>
                        <button className={styles.deletedesque} onClick={()=> deletarDestaque(index)}>X</button> 
                          <img src={url} alt="teste"></img>
                        <p>NOME:{card.nome}</p>
                        <p>IDADE:{card.idade}</p>
                        <p>CIDADE:{card.cidade}</p>
                    </div>
                    
                ))}
                 </div>
                        {/* BOTAO DE FILTRO */}
<div className={styles.boxfiltrosoptions}>
<div className={styles.botaodofiltropessoa}> <Select
                options={nomeOptions}
                placeholder="Selecione um nome"
                onChange={(selectedOption) => {
                    const filtrodepessoas = pessoa.filter(pessoa => pessoa.nome === selectedOption.value);
                    setPessoa(filtrodepessoas);
                  }}/> </div>

</div>
               
                            {/* MAP DO PESSOAS QUE FICA EMBAIXO */}
                {pessoa?.map((card, index)=> {return <div className={styles.nomedecada} key={index}>
                     <img src={url} alt="teste"></img>
                     <p> NOME:{card.nome}</p> 
                    <p>IDADE:{card.idade}</p>
                    <p>CIDADE:{card.cidade}</p>      
                    
                     
                       
                    
                    <button  className={styles.botaodeselecionar} onClick={()=> moverparadestaque(index)}>SELECIONAR</button>
                              </div>})}
               
            </div>
        </div>
    )
}