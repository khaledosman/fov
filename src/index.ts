import { Location } from './model/Location'
import { Customer } from './model/Customer'
import { getCustomersRaw } from './helpers/get-customers-raw'
import { parseCustomers } from './helpers/parse-customers'
import { getCustomersWithinRadiusFromLocation } from './helpers/get-customers-within-radius'


(function main() {
    getCustomersRaw()
        .then(parseCustomers)
        .then((customers: Array<Customer>) => getCustomersWithinRadiusFromLocation(customers, 100000, new Location(52.493256, 13.446082)))
        .then((customers: Array<Customer>) => customers.sort((customerA: Customer, customerB: Customer) => customerA.id.localeCompare(customerB.id)))
        // .then(console.log)
        .then((customers: Array<Customer>) => customers.forEach(customer => console.log(customer.id)))
        .catch((error: Error )=> {
            console.warn('An error occured here -->', error)
        })
})()