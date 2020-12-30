import React, { Component } from 'react'
import { Col,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ApiAxios from './services/ApiAxios'


class  FormTarefa extends Component {

   constructor(props){
       super(props)

       this.state = {
           descricao:'',
           flag_concluido:''
       }
   }

   changeHandler = e =>{
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   submitHandler = e =>{
       e.preventDefault()
       console.log(this.state)
       ApiAxios
        .post('/tasks',this.state)
        .then(response =>{
            console.log(response)
            window.location.reload()
        })
        .catch(error =>{
            console.log(error)
        })

   }

   handleCheckClick = (e) => {
    if(e.target.type === 'checkbox'){
        let checkboxValue = e.target.checked ? "true": ""
        this.setState({flag_concluido: checkboxValue})
      }
      
  }



    render(){
        const {descricao,flag_concluido} = this.state
        return (
            
            <div class="col pl-4 pt-3">
                <Form onSubmit={this.submitHandler}>
                    <h3>Nova Tarefa</h3>
                    <FormGroup row>
                        
                    <Label sm={1} for="exampleEmail">Descricão: </Label>
                    <Col sm={5}>
                    <Input type="text" name="descricao"  placeholder="descricao da atividade" value={descricao} onChange={this.changeHandler} required/>
                    <Label check>
                        <Input type="checkbox" id="checkbox" value={flag_concluido} onChange={this.handleCheckClick} checked={this.state.checked} /> Concluido
                    </Label>
                    </Col>

                    <Button type='submit' >Criar Tarefa</Button>

                    </FormGroup>
                    <br/>
                </Form>
            </div>  
        
        
        );
    }
}
  

  
  export default FormTarefa;