import * as fs from 'fs'
import { promisify } from 'util'

const readFilePromisified = promisify(fs.readFile)

export function getCustomersRaw(): Promise<String> {
    return readFilePromisified('customers.txt', { encoding: 'utf8' })
}