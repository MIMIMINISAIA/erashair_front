import React, {Component, useState, ChangeEvent, FormEvent, useEffect}from 'react';
import styles from "../App.module.css"
import { CadastroProfissionalInterfaces } from '../interfaces/CadastroProfissionalInterfaces';
import axios from 'axios';
import Header from './HeaderProfissional';
import Footer from './FooterProfissional';


const Listagemprofissionals = () => {

    const [profissionals, setProfissionals] = useState<CadastroProfissionalInterfaces[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const hadleState =(e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "pesquisa"){
            setPesquisa(e.target.value);
        }
    }

    const buscar = (e:FormEvent)=>{
        e.preventDefault();

        async function fetchData(){
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/procurarNProfissional',
                {nome:pesquisa},
                {
                    headers:{
                        "Accept":"application/json",
                        "content-Type":"aplication/json"
                    }
                }).then(function(response){
                    setProfissionals(response.data.data);
                }).catch(function(error){
                    console.log(error);
                });

            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }
    useEffect(() =>{
        async function fetchData(){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/profissional/retornarTodos');
                setProfissionals(response.data.data);
                

            }catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }

        }

        fetchData();
    }, []);
    return(
        <div>
            <main className={styles.main}>
           
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar}className='row'>
                                    <div className='col-10'>
                                        <input type="text" name='pesquisa' className='form-control' onChange={hadleState}/>
                                    </div>
                                    
                                    <div className='col-1'>
                                        <button type='submit'
                                         className='btn btn-success'>Pesquisar</button>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>

                  

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Profissionais
                            </h5>
                            <table className='table table-hover table-bordered border-dark border border-success p-2 mb-2 border-opacity-25'>
                                <thead>
                                    <tr>
                                        {/* <th>ID</th> */}
                                        <th>Nome</th>
                                        <th>celular</th>
                                        <th>email</th>
                                        <th>cpf</th>
                                        <th>dataNascimento</th>
                                        <th>cidade</th>
                                        <th>estado</th>
                                        {/* <th>pais</th> */}
                                        {/* <th>rua</th> */}
                                        {/* <th>numero</th> */}
                                        {/* <th>bairro</th> */}
                                        {/* <th>cep</th> */}
                                        {/* <th>complememnto</th> */}
                                        {/* <th>senha</th> */}
                                        <th>salario</th>
                                    </tr>
                                    
                                    
                                </thead>
                                <tbody>
                                    {profissionals.map(profissionals =>(
                                    <tr key={profissionals.id}>
                                        {/* <td>{profissionals.id}</td> */}
                                        <td>{profissionals.nome}</td>
                                        <td>{profissionals.celular}</td>
                                        <td>{profissionals.email}</td>
                                        <td>{profissionals.cpf}</td>
                                        <td>{profissionals.dataNascimento}</td>
                                        <td>{profissionals.cidade}</td>
                                        <td>{profissionals.estado}</td>
                                        {/* <td>{profissionals.pais}</td> */}
                                        {/* <td>{profissionals.rua}</td> */}
                                        {/* <td>{profissionals.numero}</td> */}
                                        {/* <td>{profissionals.bairro}</td> */}
                                        {/* <td>{profissionals.cep}</td> */}
                                        {/* <td>{profissionals.complemento}</td> */}
                                        {/* <td>{profissionals.senha}</td> */}
                                        <td>
                                            <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                            <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    

                </div>

            </main>
        </div>
    );
}

export default Listagemprofissionals;