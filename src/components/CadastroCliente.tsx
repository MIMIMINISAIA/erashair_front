import React, {Component, useState, ChangeEvent, FormEvent, useEffect}from 'react';
import Header from './HeaderCliente';
import Footer from './FooterCliente';
import styles from '../App.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CadastroCliente = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    //Erros
    const [nomeErro, setNomeErro] = useState<string>("");
    const [celularErro, setCelularErro] = useState<string>("");
    const [emailErro, setEmailErro] = useState<string>("");
    const [cpfErro, setCpfErro] = useState<string>("");
    const [dataNascimentoErro, setDataNascimentoErro] = useState<string>("");
    const [cidadeErro, setCidadeErro] = useState<string>("");
    const [estadoErro, setEstadoErro] = useState<string>("");
    const [paisErro, setPaisErro] = useState<string>("");
    const [ruaErro, setRuaErro] = useState<string>("");
    const [numeroErro, setNumeroErro] = useState<string>("");
    const [bairroErro, setBairroErro] = useState<string>("");
    const [cepErro, setCepErro] = useState<string>("");
    const [complementoErro, setComplementoErro] = useState<string>("");
    const [senhaErro, setSenhaErro] = useState<string>("");

 

   

    const CadastroCliente = (e: FormEvent) => {

        setNomeErro("")
        setCelularErro("")
        setEmailErro("")
        setCpfErro("")
        setDataNascimentoErro("")
        setCidadeErro("")
        setEstadoErro("")
        setPaisErro("")
        setRuaErro("")
        setNumeroErro("")
        setBairroErro("")
        setCepErro("")
        setComplementoErro("")
        setSenhaErro("")
        

        e.preventDefault();

        const dados ={
            nome: nome,
            celular: celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: senha,
            
        }

        axios.post('http://127.0.0.1:8000/api/cadastro', dados,
        {
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }

        }).then(function(response){
            if (response.data.success === false) {
                if ('nome' in response.data.error) {
                    setNomeErro(response.data.error.nome[0]);
                }
                if ('celular' in response.data.error) {
                    setCelularErro(response.data.error.celular[0]);
                }
                if ('email' in response.data.error) {
                    setEmailErro(response.data.error.email[0]);
                }
                if ('cpf' in response.data.error) {
                    setCpfErro(response.data.error.cpf[0]);
                } 
                if ('dataNascimento' in response.data.error) {
                    setDataNascimentoErro(response.data.error.dataNascimento[0]);
                }
                if ('cidade' in response.data.error) {
                    setCidadeErro(response.data.error.cidade[0]);
                }
                if ('estado' in response.data.error) {
                    setEstadoErro(response.data.error.estado[0]);
                }
                if ('pais' in response.data.error) {
                    setPaisErro(response.data.error.pais[0]);
                }
                if ('rua' in response.data.error) {
                    setRuaErro(response.data.error.rua[0]);
                }
                if ('numero' in response.data.error) {
                    setNumeroErro(response.data.error.numero[0]);
                }
                if ('bairro' in response.data.error) {
                    setBairroErro(response.data.error.bairro[0]);
                }
                if ('cep' in response.data.error) {
                    setCepErro(response.data.error.cep[0]);
                }
                if ('complemento' in response.data.error) {
                    setComplementoErro(response.data.error.complemento[0]);
                }
                if ('senha' in response.data.error) {
                    setSenhaErro(response.data.error.senha[0]);
                }
               
                

                }
            // if(response.data.success == false){
            //     console.log("Error");
            //     console.log(response.data.error);
            //     alert("erro ao cadastrar, olhar o console")
            // }
            else{
                window.location.href = "/listagemCliente";
            }
            
        }).catch(function(error){
            console.log(error);
        });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "nome"){
            setNome(e.target.value);
        }
        if(e.target.name === "celular"){
            setCelular(e.target.value);
        }
        if(e.target.name=== "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }
        if(e.target.name === "dataNascimento"){
            setDataNascimento(e.target.value);
        }
        if(e.target.name === "cidade"){
            setCidade(e.target.value);
        }
        if(e.target.name === "estado"){
            setEstado(e.target.value);
        }
        if(e.target.name === "pais"){
            setPais(e.target.value);
        }
        if(e.target.name === "rua"){
            setRua(e.target.value);
        }
        if(e.target.name === "numero"){
            setNumero(e.target.value);
        }
        if(e.target.name === "bairro"){
            setBairro(e.target.value);
        }
        if(e.target.name === "cep"){
            setCep(e.target.value);
        }
        if(e.target.name === "complemento"){
            setComplemento(e.target.value);
        }
        if(e.target.name === "senha"){
            setSenha(e.target.value);
        }
       
       
    }

    const findCep = (e: FormEvent) => {
        e.preventDefault();
        console.log(cep)
        fetch('https://viacep.com.br/ws/'+cep+'/json/',
        {
            method: 'GET'
        }).then(response => response.json())
        .then(
            data => {
                setCidade(data.localidade);
                //setCep(data.cep);
                setRua(data.logradouro);
                setBairro(data.bairro);


                setEstado(data.uf);       
            }
        ).catch(function(error){
            console.log(error);
        });
        
    }
    return(
        <div>
             <nav className=" bg-warning">
                <ul className="nav nav-tabs">
                    <li className="nav-item dropdown btn-warning">
                        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Cadastros</a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/CadastroServico"} className="dropdown-item" >Cadastro Serviço</Link></li>
                            <li><Link to={"/cadastroProfissional"} className="dropdown-item">Cadastro Profissional</Link></li>
                           
                        </ul>
                    </li>
                    <li className="nav-item dropdown btn-warning">
                        <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Listagens</a>
                        <ul className="dropdown-menu">
                            <li><Link to={"/ListagemServico"} className="dropdown-item" >Listagem Serviço</Link></li>
                            <li><Link to={"/ListagemCliente"} className="dropdown-item">Listagem Cliente</Link></li>
                            <li><Link to={"/ListagemProfissional"} className="dropdown-item">Listagem Profissional</Link></li>
                            <li><Link to={"/ListagemAgenda"} className="dropdown-item">Listagem Agenda</Link></li>

                           
                        </ul>
                    </li>

                </ul>
            </nav>
           <Header />
           <main className={styles.main}>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Cadastrar Cliente</h5>
                        <form onSubmit={CadastroCliente} className='row g-3'>
                            
                            <div className='col-6'>
                                <label htmlFor="nome" className='form-label'>Nome</label>
                                <input type="text" name='nome' className='form-control' required onChange={handleState} />
                                <div className='text-danger'>{nomeErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="celular" className='form-label'>Celular</label>
                                <input type="text" name='celular' className='form-control' required onChange={handleState} />
                                <div className='text-danger'>{celularErro}</div>
                            </div>

                             
                            <div className='col-6'>
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="text" name='email' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{emailErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="cpf" className='form-label'>CPF</label>
                                <input type="text" name='cpf' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{cpfErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="dataNascimento" className='form-label'>Data Nascimento</label>
                                <input type="date" name='dataNascimento' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{dataNascimentoErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="cep" className='form-label'>CEP</label>
                                <input type="text" name='cep' className='form-control' required onChange={handleState} onBlur={findCep}/>
                                <div className='text-danger'>{cepErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="cidade" className='form-label'>Cidade</label>
                                <input type="text" name='cidade' className='form-control' required onChange={handleState} value={cidade}/>
                                <div className='text-danger'>{cidadeErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="estado" className='form-label'>Estado</label>
                                <input type="text" name='estado' className='form-control' required onChange={handleState} value={estado}/>
                                <div className='text-danger'>{estadoErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="pais" className='form-label'>Pais</label>
                                <input type="text" name='pais' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{paisErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="rua" className='form-label'>Rua</label>
                                <input type="text" name='rua' className='form-control' required onChange={handleState} value={rua}/>
                                <div className='text-danger'>{ruaErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="numero" className='form-label'>Numero</label>
                                <input type="text" name='numero' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{numeroErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="bairro" className='form-label'>Bairro</label>
                                <input type="text" name='bairro' className='form-control' required onChange={handleState} value={bairro}/>
                                <div className='text-danger'>{bairroErro}</div>
                            </div>

                           

                            <div className='col-6'>
                                <label htmlFor="complemento" className='form-label'>Complemento</label>
                                <input type="text" name='complememnto' className='form-control' required onChange={handleState}/>
                                <div className='text-danger'>{complementoErro}</div>
                            </div>

                            <div className='col-6'>
                                <label htmlFor="inputPassword5" className='form-label'>Senha</label>
                                <input type="password" name='senha' id='inputPassword5' className='form-control' aria-describedby="passwordHelpBlock" required onChange={handleState}/>
                                <div className='text-danger'>{senhaErro}</div>
                            </div >

                            
                             <div className='col-12'>
                                    <button type='submit' className=' btn btn-success btn-sm'>Cadastrar</button>
                                </div>
                             
                             
                            
                        </form>

                    </div>

                </div>

            </div>

           </main>

           <Footer/>
        </div>
    );
}





export default CadastroCliente;





