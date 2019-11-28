import { connect } from 'react-redux';
import { setFiltroAction } from '../actions/todo';
import Footer from '../components/Footer';


const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (filtro) => {
            dispatch(setFiltroAction(filtro));
        }
    };
}

const FooterContainer = connect(
    null,
    mapDispatchToProps
)(Footer);

export default FooterContainer;