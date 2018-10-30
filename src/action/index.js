import * as CONSTANT from '../constant/Constant';

export const loadAllData = () => {
    return async (dispatch) => {
        dispatch(getContactsPending());
        try {
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // dispatch(getContactsSuccess(response.data));
            if (localStorage && localStorage.getItem(CONSTANT.KEY_STORE)) {
                var contacts = JSON.parse(localStorage.getItem(CONSTANT.KEY_STORE));
                dispatch(getContactsSuccess(contacts));
            }
            // this.setState({ mArrUsers: response.data });
            // this.setState({ loading: false });
            // console.log(x());
        } catch (error) {
            //console.error(error);
            dispatch(getContactsError(error));
        }
    }
}
var x = () => {
    return Math.floor((1 + Math.random()) * 256).toString(16).substring(1);
}
var uuid = () => {
    var xxx = '';
    var i;
    for (i = 0; i < 10; i++) {
        xxx += x() + "-";
    }
    return xxx.slice(0, -1);
}
var generate = () => {

    var tasks = [
        {
            id: uuid(),
            name: 'Nguyễn Văn A',
            sdt: '09999999990'
        },
        {
            id: uuid(),
            name: 'Nguyễn Văn B',
            sdt: '09999999991'
        },
        {
            id: uuid(),
            name: 'Nguyễn Văn C',
            sdt: '09999999992'
        },
        {
            id: uuid(),
            name: 'Nguyễn Văn D',
            sdt: '09999999993'
        },
        {
            id: uuid(),
            name: 'Nguyễn Văn E',
            sdt: '09999999994'
        }
    ]
    localStorage.setItem(CONSTANT.KEY_STORE, JSON.stringify(tasks));

}
export const generateData = () => {
    return async (dispatch) => {
        dispatch(getContactsPending());
        try {
            //localStorage.clear();
            generate();
            //getContactsSuccess(contacts)
            if (localStorage && localStorage.getItem(CONSTANT.KEY_STORE)) {
                var contacts = JSON.parse(localStorage.getItem(CONSTANT.KEY_STORE));
                dispatch(getContactsSuccess(contacts));
            }

        } catch (error) {
            dispatch(getContactsError(error));
        }
    }
}

const getContactsSuccess = (data) => ({
    type: CONSTANT.SUCCESS,
    contacts: data // PARAMETER
});

const getContactsPending = () => ({
    type: CONSTANT.PENDING,
});

const getContactsError = (error) => ({
    type: CONSTANT.ERROR,
    error: error // PARAMETER
});