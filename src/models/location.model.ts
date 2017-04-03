import Pad from './pad.model';

interface Location {
    id: number;
    name: string;
    infoURL: string;
    wikiURL: string;
    countryCode: string;

    pads: Pad[];
}

export default Location;