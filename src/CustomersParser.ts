import * as fs from 'fs'
import { promisify } from 'util'
import { Location } from './Location';
import { Customer } from './Customer';

const readFilePromisified = promisify(fs.readFile)

export function getCustomersRaw(): Promise<String> {
    return readFilePromisified('customers.txt', { encoding: 'utf8' })
}

export function parseCustomers(rawData: String): Array<Customer> {
    return rawData.trim().split('\n').map(line => {
        const customer = {}
        const splitByComma = line.split(',')
        splitByComma.forEach(part => {
            if (part.includes(':')) {
                const [key, value] = part.split(':')
                customer[key.trim()] = value.trim()
            }
        })
        const lat = Number.parseFloat(customer['lat'])
        const long = Number.parseFloat(customer['long'])
        const location = lat && long ? new Location(lat, long): null
        return new Customer(customer['id'], location)
    })
}