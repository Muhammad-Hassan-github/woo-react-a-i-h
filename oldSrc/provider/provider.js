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
    const [searchItem, setSearchItem] = useState([]);
    const [placeOrderItem, setPlaceOrderItem] = useState([]);

    const [selectCustomerId, setSelectCustomerId] = useState()





    const [activePageOrder, setactivePageOrder] = useState(1);
    const [activePageProduct, setactivePageProduct] = useState(1);


    const [customers, setCustomers] = useState([]);
    const [customerdetail, setCustomerDetail] = useState({});
    const [customerById, setCustomerById] = useState({});

    const [totalProducts, setTotalProducts] = useState({});
    const [totalOrders, setTotalOrders] = useState({});

    const [autocompleValueInEditPage, setautocompleValueInEditPage] = useState("");
    const [getOverideTax, setGetOverideTax] = useState("");






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
            url: 'https://cors-anywhere.herokuapp.com/https://capinfostaging.wpengine.com/',
            consumerKey: 'ck_6ddb1708df95f8007518d2a08e5dcef14fc7e2e2',
            consumerSecret: 'cs_9297a433ce9039451dfd3417bd0c70c5c4770e96',
            version: 'v3',
            queryStringAuth: true

        });


        WooCommerce.getAsync('orders').then(function (result) {
            setOrderByCustomer(JSON.parse(result.toJSON().body))
            console.log(JSON.parse(result.toJSON().body))
        });

        WooCommerce.getAsync('products').then(function (result) {
            setProductByCustomer(JSON.parse(result.toJSON().body))
        });

        WooCommerceOld.getAsync('orders/count', function (result, error) {
            setTotalOrders(JSON.parse(error.toJSON().body).count)
        });

        WooCommerceOld.getAsync('products/count', function (result, error) {
            setTotalProducts(JSON.parse(error.toJSON().body).count)

        });
        let getOverideTaxFn =async()=>{
            const { data } = await axios.get(`https://capinfostaging.wpengine.com/wp-json/max_react_api/v1/get_tax_rates`);
            console.log("dataA" ,data)
            setGetOverideTax(data)

        }
        
        getOverideTaxFn();
        

    }, []);

    let updateOrder = (orderId, data) => {
        WooCommerce.putAsync(`orders/${orderId}`, data).then(function (result) {
            console.log(JSON.parse(result.toJSON().body))
        });
    }
    let createOrder = (data) => {
        WooCommerce.postAsync(`orders`, data).then(function (result) {
            console.log(JSON.parse(result.toJSON().body))
        });
    }
    let createUserFn = (data) => {
        WooCommerce.postAsync(`customers`, data).then(function (result) {
            console.log(JSON.parse(result.toJSON().body))
        });

    }

    let searchItemsFn = (e) => {

        WooCommerce.getAsync(`products?search=${e}`).then(function (result) {
            setSearchItem(JSON.parse(result.toJSON().body))
        });
    }


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

        });
    }

    let getOrderByIdFn = async(orderId) => {
        
        let customerId ;
       await WooCommerce.getAsync(`orders/${orderId}`).then(function (result) {
            setCustomerById(JSON.parse(result.toJSON().body))
            console.log(JSON.parse(result.toJSON().body))
            let obj = JSON.parse(result.toJSON().body)
            customerId = obj.customer_id
            
        });


        WooCommerce.getAsync(`customers/${customerId}`).then(function (result) {
            setautocompleValueInEditPage(JSON.parse(result.toJSON().body))
        });

        console.log("CustomerById" ,customerById)
    }
    

    let changeShipping = async (a, b) => {
        console.log(a,b)
        const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://capinfostaging.wpengine.com/wp-json/max_react_api/v1/edit_bulk_shipping/${a}/${b}`);
        console.log("data" ,data);
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
                searchItem, setSearchItem,
                placeOrderItem, setPlaceOrderItem,
                selectCustomerId, setSelectCustomerId,
                autocompleValueInEditPage, setautocompleValueInEditPage,
                getOverideTax, setGetOverideTax,



                searchOrder,
                searchCustomer,
                searchProduct,
                searchCustomerById,
                searchItemsFn,
                updateOrder,
                createOrder,
                createUserFn,
                getOrderByIdFn,
                changeShipping




            }}
        >

            <div>
                {props.children}
            </div>
        </MyContext.Provider>
    );
}

export default App;
