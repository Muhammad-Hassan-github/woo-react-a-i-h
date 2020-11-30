import React, { useContext } from 'react';
import MyContext from "../contextApi/context";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Error() {

    return (
        <MyContext.Consumer>
            {(context) => {
                return (
                    <div>
                        {context.errorState !== null ? context.errorState.response==='success'? toast.success(context.errorState.message):toast.error(context.err) : null}
                        <ToastContainer />
                    </div>
                );

            }}

        </MyContext.Consumer >
    );
}