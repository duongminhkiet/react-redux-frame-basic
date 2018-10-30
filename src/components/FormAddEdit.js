import React, { Component } from 'react';
class FormAddEdit extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="card border-info mb-2">
                <div className="card-header bg-info text-white"><span className="fa fa-plus mr-2"></span>Thêm công việc</div>
                <div className="card-body">
                    <form className="col-12">
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text" className="form-control" id="name" defaultValue="" />
                        </div>
                        <div className="form-group">
                            <label>Số Điện Thoại:</label>
                            <input type="text" className="form-control" id="sdt" defaultValue="" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success"><span className="fa fa-plus mr-2"></span>Thêm</button>&nbsp;
                                        <button type="submit" className="btn btn-danger"><span className="fa fa-minus mr-2"></span>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}
export default FormAddEdit;