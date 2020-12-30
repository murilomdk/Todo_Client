import React,{ Component } from 'react'
import apiAxios from './services/ApiAxios'
import { Table } from 'reactstrap';



class Body extends Component {

    state={tarefas:[],}

    async componentDidMount(){
        const response = await apiAxios.get('/tasks')
        this.setState({tarefas: response.data})

        }

    render(){
        const {tarefas} = this.state

        return(
            <Table striped bordered>
        
            <thead>
              <tr>
                <th class="pl-3">id</th>
                <th>Descrição</th>
                <th>Data de criação</th>
                <th>Concluido?</th>
              </tr>
            </thead>
            <tbody>
                {tarefas.map(tarefa =>(

                    <tr>
                    <th scope="row" >{tarefa.id_tarefa}</th>
                    <td>{tarefa.descricao}</td>
                    <td>{tarefa.data_cadastro}</td>
                    <td><input type='checkbox' checked={tarefa.flag_concluido} ></input> </td>
                    </tr>

                ))} 
            </tbody>
          </Table>

        )

    }   


}

export default Body