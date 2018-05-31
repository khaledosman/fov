import { calculateGreatCircleDistance } from '../helpers/calculate-greate-circle-distance'
import { Location } from '../model/Location'
import { Customer } from '../model/Customer'

/**
 * 
 * @param customers 
 * @param radius radius representing the area to locate customers around the relative position.. measured in meters
 * @param relativeLocation 
 */
export function getCustomersWithinRadiusFromLocation(customers: Array<Customer>, radius: number, relativeLocation: Location): Array<Customer> {
    return customers.filter(customer => calculateGreatCircleDistance(relativeLocation, customer.location) <= radius)
}
