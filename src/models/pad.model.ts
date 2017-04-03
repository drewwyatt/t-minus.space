import Agency from './agency.model';

interface Pad {
    id: number;
    name: string;
    infoURL: string;
    wikiURL: string;
    mapURL: string;
    latitude: number;
    longitude: number;
    agencies: Agency[];
}

export default Pad;