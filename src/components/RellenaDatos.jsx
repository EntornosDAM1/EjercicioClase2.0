import React from 'react';
import {Table} from  'react-bootstrap';
import {Button} from  'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import {TitulosTablaCoches,DatosTablaCoches} from '../data/DatosCoches';
import {Card} from 'react-bootstrap';

class RellenaDatos extends React.Component {
  state = { index: 0 };

  constructor(props) {
    super(props);
  }

  actualizaCampo = () => {
    this.setState({ index: this.state.index++ });
    console.log(this.index)
  }




  render(){
   
    return(
      <div>
        <h1>Coches</h1>
        <Container>
        <Table responsive striped>
          <thead>
            <tr>
              <th>{TitulosTablaCoches.id}</th>
              <th>{TitulosTablaCoches.field1}</th>
              <th>{TitulosTablaCoches.field2}</th>
              <th>{TitulosTablaCoches.field3}</th>
              <th>{TitulosTablaCoches.field4}</th>
              <th>{TitulosTablaCoches.field5}</th>
              <th>Pulsador</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                        <td>{DatosTablaCoches[this.state.index].matricula}</td>
                        <td>{DatosTablaCoches[this.state.index].marca}</td>
                        <td>{DatosTablaCoches[this.state.index].modelo}</td>
                        <td>{DatosTablaCoches[this.state.index].color}</td>
                        <td><Card.Img variant="top" src={DatosTablaCoches[1].imagen}/> </td>
                        <br/>
                        <td>{DatosTablaCoches[1].descripcion}</td>
                        <td><Button onClick={this.actualizaCampo} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" >Cambiar</Button></td>
                  
          </tr>
           {/* 
             {DatosTablaCoches.map((item)=>{
                  return(
                    <tr>
                        <td>{item.matricula}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                        <td><Card.Img variant="top" src={item.imagen} /></td>
                        <td>{item.descripcion}</td>
                        <td><Button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" >
  Single toggle
</Button></td>
                  
                    </tr>
                  );
                }
              )
             }
*/}
          </tbody>
      </Table>
      </Container>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={DatosTablaCoches[2].imagen} />
  <Card.Body>
    <Card.Title>{DatosTablaCoches[2].marca}</Card.Title>
    <Card.Text>
      Coche con matricula {DatosTablaCoches[2].matricula}
    </Card.Text>
  </Card.Body>
</Card>
      </div>
      )
    
  }
  
 
}

export default RellenaDatos;