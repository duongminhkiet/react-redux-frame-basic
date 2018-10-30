import React, { Component } from 'react';
class ContactList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">STT</th>
                            <th scope="col" className="text-center">Tên</th>
                            <th scope="col" className="text-center">Số Điện Thoại</th>
                            <th scope="col" className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th scope="row" className="text-center align-middle">1</th>
                            <td className="align-middle">Jacob</td>
                            <td className="align-middle">0999 999 999</td>
                            <td className="text-center align-middle">
                                <button type="button" className="btn btn-warning">
                                    <span className="fa fa-edit mr-2"></span>Sửa
                                        </button>
                                &nbsp;
                                        <button type="button" className="btn btn-danger">
                                    <span className="fa fa-trash mr-2"></span>Xóa
                                        </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-center align-middle">2</th>
                            <td className="align-middle">Larry</td>
                            <td className="align-middle">0977 777 777</td>
                            <td className="text-center align-middle">
                                <button type="button" className="btn btn-warning">
                                    <span className="fa fa-edit mr-2"></span>Sửa
                                        </button>
                                &nbsp;
                                        <button type="button" className="btn btn-danger">
                                    <span className="fa fa-trash mr-2"></span>Xóa
                                        </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ContactList;