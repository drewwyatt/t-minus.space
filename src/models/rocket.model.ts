import Agency from './agency.model';

interface Rocket {
    id: number;
    name: string;
    configuration: string;
    familyname: string;
    agencies: Agency[];
    wikiURL: string;
    infoURLs: string[];
    imageSizes: number[];
    imageURL: string;
}

export default Rocket;