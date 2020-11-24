import React, {
    useReducer,
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

import MyContext from "../contextApi/context";
import axios from "axios";

function App(props) {

    const [orderByCustomer, setOrderByCustomer] = useState([]);
    const [productByCustomer, setProductByCustomer] = useState([]);

    const [activePageOrder, setactivePageOrder] = useState(1);
    const [activePageProduct, setactivePageProduct] = useState(1);


    const [customers, setCustomers] = useState([]);
    const [customerdetail, setCustomerDetail] = useState({});
    const [customerById, setCustomerById] = useState({});

    const [totalProducts, setTotalProducts] = useState({});
    const [totalOrders, setTotalOrders] = useState({});





    var WooCommerceAPI = require('woocommerce-api');

    var WooCommerce = new WooCommerceAPI({
        url: 'https://capinfostaging.wpengine.com/',
        consumerKey: 'ck_6ddb1708df95f8007518d2a08e5dcef14fc7e2e2',
        consumerSecret: 'cs_9297a433ce9039451dfd3417bd0c70c5c4770e96',
        wpAPI: true,
        version: 'wc/v1',
        queryStringAuth: true
    });

    useEffect(() => {

        var WooCommerceAPI = require('woocommerce-api');

        var WooCommerce = new WooCommerceAPI({
            url: 'https://capinfostaging.wpengine.com/',
            consumerKey: 'ck_6ddb1708df95f8007518d2a08e5dcef14fc7e2e2',
            consumerSecret: 'cs_9297a433ce9039451dfd3417bd0c70c5c4770e96',
            wpAPI: true,
            version: 'wc/v3',
            queryStringAuth: true
        });


        var WooCommerceOld = new WooCommerceAPI({
            url: 'https://capinfostaging.wpengine.com/',
            consumerKey: 'ck_6ddb1708df95f8007518d2a08e5dcef14fc7e2e2',
            consumerSecret: 'cs_9297a433ce9039451dfd3417bd0c70c5c4770e96',
            version: 'v3',
            queryStringAuth: true

        });


        WooCommerce.getAsync('orders').then(function (result) {
            setOrderByCustomer(JSON.parse(result.toJSON().body))
        });


        WooCommerce.getAsync('products').then(function (result) {
            setProductByCustomer(JSON.parse(result.toJSON().body))
        });
        WooCommerceOld.getAsync('orders/count', function (result , error) {
            // console.log(JSON.parse(error.toJSON().body));
            // setTotalOrders(JSON.parse(error.toJSON().body).count)
            console.log(result , error)
        });

        WooCommerceOld.getAsync('products/count', function (result , error) {
            // console.log(JSON.parse(error.toJSON().body));
            // setTotalProducts(JSON.parse(error.toJSON().body).count)
            console.log(result , error)

        });

      

    }, []);

    
    let searchCustomer = (e) => {

        WooCommerce.getAsync(`customers?search=${e}`).then(function (result) {

            setCustomers(JSON.parse(result.toJSON().body))

            let obj = {}
            for (const [key, value] of Object.entries(JSON.parse(result.toJSON().body))) {
                let objKey = value.id;
                let objValue = `${value.first_name} ${value.last_name} (#${value.username} - ${value.email}) `
                obj[key] = { objKey, objValue }


                if (parseInt(key) === parseInt(JSON.parse(result.toJSON().body).length - 1)) {

                    if (customerdetail !== obj) {
                        setCustomerDetail(obj)

                    }



                }
            }
        });


    }

    let searchOrder = (customerKey, pageNumber) => {

        if (customerKey) {
            if (pageNumber) {

                WooCommerce.getAsync(`orders?customer=${customerKey}&page=${pageNumber}`).then(function (result) {
                    setOrderByCustomer(JSON.parse(result.toJSON().body))


                });
                WooCommerce.getAsync(`customers/${customerKey}`).then(function (result) {
                    setTotalOrders(JSON.parse(result.toJSON().body).orders_count)
        
                });
            }
            else {

                WooCommerce.getAsync(`orders?customer=${customerKey}`).then(function (result) {
                    setOrderByCustomer(JSON.parse(result.toJSON().body))
                    setactivePageOrder(1)

                });
                WooCommerce.getAsync(`customers/${customerKey}`).then(function (result) {
                    setTotalOrders(JSON.parse(result.toJSON().body).orders_count)

        
                });
            }

        }
        else {

            WooCommerce.getAsync(`orders?page=${pageNumber}`).then(function (result) {
                setOrderByCustomer(JSON.parse(result.toJSON().body))

            });
        }
    }


    let searchProduct = (productName, pageNumber) => {

        if (productName) {
            if (pageNumber) {

                WooCommerce.getAsync(`products?sku=${productName}&page=${pageNumber}`).then(function (result) {
                    setProductByCustomer(JSON.parse(result.toJSON().body))

                });
            }
            else {

                WooCommerce.getAsync(`products?sku=${productName}`).then(function (result) {
                    setProductByCustomer(JSON.parse(result.toJSON().body))

                    setactivePageProduct(1)

                });
            }

        }
        else {

            WooCommerce.getAsync(`products?page=${pageNumber}`).then(function (result) {
                setProductByCustomer(JSON.parse(result.toJSON().body))

            });
        }



    }

    let searchCustomerById = (e) => {
        WooCommerce.getAsync(`customers/${e}`).then(function (result) {
            setCustomerById(JSON.parse(result.toJSON().body))
            // setCustomerByIdFlag(true)

        });
    }



    return (
        <MyContext.Provider
            value={{
                orderByCustomer, setOrderByCustomer,
                customers, setCustomers,
                customerdetail, setCustomerDetail,
                activePageOrder, setactivePageOrder,
                activePageProduct, setactivePageProduct,
                productByCustomer, setProductByCustomer,
                customerById, setCustomerById,
                totalProducts, setTotalProducts,
                totalOrders, setTotalOrders,

                searchOrder,
                searchCustomer,
                searchProduct,
                searchCustomerById,




            }}
        >

            <div>
                {props.children}
            </div>
        </MyContext.Provider>
    );
}

export default App;
