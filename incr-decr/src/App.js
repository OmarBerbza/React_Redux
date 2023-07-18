import './App.css';
import { connect } from 'react-redux';
import { Incrementer, Dicrementer } from './Store/actionsTypes'

function App(props) {

  return (
    <div className="App p-5">
      <p className=''>{props.num}</p>
      <button onClick={props.Incrementer} className='btn btn-primary m-3 '>Incrimenter</button>
      <button onClick={props.Dicrementer} className='btn btn-danger m-3 '>Decrimenter</button>
    </div>
  );
}

function mapStateToProps(state){
  return{
    num: state.num
  }
}
function mapDispatchToProps(dispatch){
  return{
    Incrementer: ()=> dispatch(Incrementer()),
    Dicrementer: ()=> dispatch(Dicrementer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
