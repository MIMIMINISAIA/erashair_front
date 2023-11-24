import React, {Component, useState, ChangeEvent, FormEvent, useEffect}from 'react';
import styles from "../App.module.css"
import { CadastroServicoInterfaces } from '../interfaces/CadastroServicoInterfaces';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './HeaderServico';
import Swal from 'sweetalert2';

const ListagemServico = () => {

    const [servicos, setServicos] = useState<CadastroServicoInterfaces[]>([]);
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
                const response = await axios.post('http://127.0.0.1:8000/api/nome',
                {nome:pesquisa},
                {
                    headers:{
                        "Accept":"application/json",
                        "content-Type":"aplication/json"
                    }
                }).then(function (response) {
                    console.log(response);
                    if (response.data.status == true) {
                        setServicos(response.data.data);
                    }
                    else {
                        setServicos([]);
                    }

                }).catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
    }

    

    const excluir = (id: number)=>{
        async function fetchData(){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });




            // try{
              
                
            //     const response = await axios.delete('http://127.0.0.1:8000/api/delete/'+ id);
                
            //     if(response.data.status === true){

            //         const response = await axios.get('http://127.0.0.1:8000/api/servico/retornarTodos/');
            //         setServicos(response.data.data);
                   
            //     }
                
            //     else{
            //         console.log(error);
            //     }
            // }catch(error){
            //     setError("ocorreu um erro");
            //     console.log(error);
            // }

            

        }
         fetchData();
    }

  
    useEffect(() =>{
        async function fetchData(){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/servico/retornarTodos/');
                setServicos(response.data.data);
                

            }catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }

        }

        fetchData();
    }, []);
    return(
        <div>
             <nav className=" bg-warning">
                <ul className="nav nav-tabs">
                    <li className="nav-item dropdown btn-warning">
                        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Listagens</a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/ListagemProfissional"} className="dropdown-item" >Listagem Profissional</Link></li>
                            <li><Link to={"/ListagemCliente"} className="dropdown-item">Listagem Cliente</Link></li>
                           
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown btn-warning">
                        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Cadastros</a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/CadastroServico"} className="dropdown-item" >Cadastro Serviço</Link></li>
                            <li><Link to={"/cadastroProfissional"} className="dropdown-item">Cadastro Profissional</Link></li>
                            <li><Link to={"/CadastroCliente"} className="dropdown-item">Cadastro Cliente</Link></li>
                           
                        </ul>
                    </li>

               

                </ul>
               
            </nav>
            <Header/>
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
                                Listagem de Serviços
                            </h5>
                            <table className='table table-hover table-bordered border-dark border border-success p-2 mb-2 border-opacity-25'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Duração</th>
                                        <th>Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicos.map(servicos =>(
                                    <tr key={servicos.id}>
                                        <td>{servicos.id}</td>
                                        <td>{servicos.nome}</td>
                                        <td>{servicos.descricao}</td>
                                        <td>{servicos.duracao}</td>
                                        <td>{servicos.preco}</td>
                                        <td>
                                            <Link to={"/editarServico/"+ servicos.id}  className='btn btn-primary btn-sm'>Editar</Link>
                                            <button onClick={()=> excluir(servicos.id)} className='btn btn-danger btn-sm'>Excluir</button>
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

export default ListagemServico;