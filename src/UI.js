import React, { Component } from 'react';
import * as CONSTANT from './constant/Constant';
import FormAddEdit from './components/FormAddEdit';
import ContactList from './components/ContactList';
class UI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem(CONSTANT.KEY_STORE)) {
            var contacts = JSON.parse(localStorage.getItem(CONSTANT.KEY_STORE));
            this.setState({
                contacts
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Thông tin liên hệ</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormAddEdit />
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary mb-2">
                            <span className="fa fa-plus mr-2"></span>Thêm Công Việc
                        </button>
                        <ContactList />
                    </div>
                </div>
            </div>
        );
    }
}
export default UI;