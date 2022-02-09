import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import ICustomerIncomingData from '../Types/IncomingDataModels/CustomerIncoming';
import { SetSelectedCustomer } from '../Actions/CustomerActions';

export default function usePatientsTableViewHook() {
    const dispatch = useDispatch();

    const customerState = useSelector(
        (state: RootState) => state.CustomersState,
    );

    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState(customerState.customers);

    useEffect(() => {
        let sortedList = customerState.customers.sort((a: any, b: any) => {
            let nameA = a.firstName.toLowerCase(),
                nameB = b.firstName.toLowerCase();
            return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
        });
        customerState && setFiltered(sortedList);
    }, [customerState]);

    const onSearch = (value: any) => {
        setSearch(value);

        var filterWithNames = customerState.customers.filter((customer) => {
            return (
                customer.firstName
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                customer.phoneNumbers[0].number
                    .toLowerCase()
                    .includes(value.toLowerCase())
            );
        });
        setFiltered(filterWithNames);
    };

    function handleCustomerSelect(customer: ICustomerIncomingData) {
        dispatch(SetSelectedCustomer(customer));
    }

    return {
        search,
        onSearch,
        handleCustomerSelect,
        filtered,
    };
}
