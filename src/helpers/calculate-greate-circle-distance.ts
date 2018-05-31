import { Location } from '../model/Location'

// Converts from degrees to radians.
function toRadians(degrees: number): number {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
function toDegrees(radians: number): number {
    return radians * 180 / Math.PI;
};

/**
 * 
 * https://www.movable-type.co.uk/scripts/latlong.html
 * Haversine formula to calculate great circle distance between two points
 * where φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
 * note that angles need to be in radians to pass to trig functions!
 */

// TODO: can be moved to Location class
export function calculateGreatCircleDistance(Location1: Location, Location2: Location): number {
    const { lat: lat1, long: lon1 } = Location1
    const { lat: lat2, long: lon2 } = Location2
    const R = 6371e3; // earth radius in metres
    const φ1 = toRadians(lat1)
    const φ2 = toRadians(lat2)
    const Δφ = toRadians(lat2 - lat1)
    const Δλ = toRadians(lon2 - lon1)

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d
}