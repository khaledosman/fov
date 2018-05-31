import "jest"
import { parseCustomers } from '../src/CustomersParser'
import { Customer } from '../src/Customer'
import { getCustomersWithinRadiusFromLocation } from '../src/get-customers-within-radius'
import { Location } from "../src/Location";

const dummyCustomers = [
    new Customer('51730bbd-9bce-4d28-ae30-580e2ddd1be8', new Location(50.43483821, 11.96975958)),
    new Customer('6890001c-57d4-4289-ab95-09a15a4cc775', new Location(52.90932574, 17.84508792))
]

describe("Jest Tests", () => {

    test("Correctly parses rows into customer objects", () => {
        const dummyData = `
            id: 51730bbd-9bce-4d28-ae30-580e2ddd1be8, lat: 50.43483821, long:11.96975958, 
            id: 6890001c-57d4-4289-ab95-09a15a4cc775, lat: 52.90932574, long:17.84508792,
        `
        const expectedOutput = dummyCustomers

        expect(parseCustomers(dummyData)).toMatchObject(expectedOutput)
    })

    test("correctlyFindsCustomersWithinRadius", () => {
        const result = getCustomersWithinRadiusFromLocation(dummyCustomers, 10, new Location(50.43483821, 11.96975958))
        expect(result).toEqual([expect.objectContaining({
            id: '51730bbd-9bce-4d28-ae30-580e2ddd1be8'
        })])

        expect(result).not.toEqual([expect.objectContaining({
            id: '6890001c-57d4-4289-ab95-09a15a4cc775'
        })])
    })
})
