import Launch from './launch.model';

interface LaunchListing {
    total: number;
    offset: number;
    count: number;
    launches: Launch[];
}

export default LaunchListing;