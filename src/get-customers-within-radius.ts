import { toRadians, calculateGreatCircleDistance } from './LocationHelpers'
import { Location } from './Location'
import { Customer } from './Customer'

/**
 * 
 * @param customers 
 * @param radius radius representing the area to locate customers around the relative position.. measured in meters
 * @param relativeLocation 
 */
export function getCustomersWithinRadiusFromLocation(customers: Array<Customer>, radius: number, relativeLocation: Location): Array<Customer> {
    return customers.filter(customer => calculateGreatCircleDistance(relativeLocation, customer.location) <= radius)
}
