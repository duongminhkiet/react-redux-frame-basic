import React, { Component } from 'react';
// import * as CONSTANT from '../constant/Constant';
import FormAddEdit from './FormAddEdit';
import ContactList from './ContactList';
class UI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }
    componentWillMount() {
        this.props.loadAllDatax();
    }
    generateData = () => {
        this.props.generateData();
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Thông tin liên hệ</h1>
                    <hr />
                </div>
                {this.props.loading && <h2>Loading</h2>}
                <div className="row">
                    <div className="col-12">
                        <FormAddEdit />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary mb-2 mr-2">
                                    <span className="fa fa-plus mr-2"></span>Thêm Công Việc
                                </button>
                                <button type="button" className="btn btn-primary mb-2" onClick={this.generateData}>
                                    <span className="fa fa-plus mr-2"></span>Tạo dữ liệu
                                </button>
                            </div>
                        </div>


                        <ContactList />
                    </div>
                </div>
            </div>
        );
    }
}
export default UI;