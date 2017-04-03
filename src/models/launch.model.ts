import Location from './location.model';
import Mission from './mission.model';
import Rocket from './rocket.model';

interface Launch {
    id: number;
    name: string;
    windowstart: string;
    windowend: string;
    net: string;
    wsstamp: number;
    westamp: number;
    netstamp: number;
    isostart: string;
    isoend: string;
    isonet: string;
    status: number;
    inhold: number;
    tbdtime: number;
    vidURLs: string[];
    infoURLs: string[];
    holdreason?: string;
    failreason?: string;
    tbddate: number;
    probability: number;
    hashtag?: string;
    location: Location;
    rocket: Rocket;
    mission: Mission;
}

export default Launch;