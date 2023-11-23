import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Header from './HeaderServico';
import Footer from './FooterServico';
import styles from '../App.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CadastroServico = () => {

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>();
    const [preco, setPreco] = useState<string>();



    const CadastroServico = (e: FormEvent) => {

        e.preventDefault();

        const dados = {
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco,

        }

        axios.post('http://127.0.0.1:8000/api/store', dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }

            }).then(function (response) {
                if (response.data.success == false) {
                    console.log("Error");
                    console.log(response.data.error);
                    alert("erro ao cadastrar, olhar o console")
                }
                else {
                    window.location.href = "/listagemServico";
                }

            }).catch(function (error) {
                console.log(error);
            });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }

    }




    return (
        <div>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Cadastros</a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/cadastroCliente"} className="dropdown-item" >Cadastro Cliente</Link></li>
                            <li><Link to={"/cadastroProfissional"} className="dropdown-item">Cadastro Profissional</Link></li>
                           
                        </ul>
                    </li>

                </ul>
            </nav>
            <Header />










            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Serviços</h5>
                            <form onSubmit={CadastroServico} className='row g-3'>

                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} />
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="descricao" className='form-label'>Descrição</label>
                                    <input type="text" name='descricao' className='form-control' required onChange={handleState} />
                                </div>


                                <div className='col-6'>
                                    <label htmlFor="duracao" className='form-label'>Duração</label>
                                    <input type="text" name='duracao' className='form-control' required onChange={handleState} />
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="preco" className='form-label'>Preço</label>
                                    <input type="text" name='preco' className='form-control' required onChange={handleState} />
                                </div>


                                <div className='col-12'>
                                    <button type='submit' className=' btn btn-success btn-sm'>Cadastrar</button>
                                </div>



                            </form>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}

export default CadastroServico;