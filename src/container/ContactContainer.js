import { connect } from 'react-redux';
import UI from '../components/UI';
import { loadAllData, generateData } from '../action';

const mapStateToProps = (state) => {
    return {
        contacts: state.ContactOut.contacts,
        loading: state.ContactOut.loading
    }
}
const mapDispatchToProps = (dispatch) => ({
    loadAllDatax: () => dispatch(loadAllData()),
    generateData: () => dispatch(generateData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UI);
