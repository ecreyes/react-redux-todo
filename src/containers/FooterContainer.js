import { connect } from 'react-redux';
import {setFiltroAction} from '../actions/todo';
import Footer from '../components/Footer';



const mapDispatchToProps = (dispatch)=>{
    return {
        onButtonClick:(filtro)=>{
            console.log(setFiltroAction(filtro));
        }
    }
}

const FooterContainer = connect(
    mapDispatchToProps
)(Footer);

export default FooterContainer;