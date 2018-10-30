import React, { Component } from 'react';
class UI extends Component {
    constructor(props) {
        super(props);
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
                        <div className="card border-info mb-2">
                            <div className="card-header bg-info text-white"><span className="fa fa-plus mr-2"></span>Thêm công việc</div>
                            <div className="card-body">
                                <form className="col-12">
                                    <div className="form-group">
                                        <label>Tên:</label>
                                        <input type="text" className="form-control" id="name" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Số Điện Thoại:</label>
                                        <input type="text" className="form-control" id="sdt" value="" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success"><span className="fa fa-plus mr-2"></span>Thêm</button>&nbsp;
                                        <button type="submit" className="btn btn-danger"><span className="fa fa-minus mr-2"></span>Hủy Bỏ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary mb-2">
                            <span className="fa fa-plus mr-2"></span>Thêm Công Việc
                        </button>
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
                    </div>
                </div>
            </div>
        );
    }
}
export default UI;