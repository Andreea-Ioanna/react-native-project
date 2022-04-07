class Event {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    organisation: string;
    thumbnail: string;

    constructor(id: string, title: string, description: string, startDate: Date, endDate: Date, 
            location: string, organisation: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organisation = organisation;
        this.thumbnail = thumbnail;
    }
}

export default Event;