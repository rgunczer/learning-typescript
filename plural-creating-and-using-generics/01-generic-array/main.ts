import { MeetingResource } from './meetingResource';
import { ConferenceRoom, conferenceRoomData } from './conferenceRoom';
import { PartyTent, partyTentData } from './partyTent';
import { Building, buildingData } from './building';

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
    let bigRooms: Array<T> = [];

    rooms.forEach(r => {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });

    return bigRooms;
}

// let bigRooms: Array<ConferenceRoom> = getBigRooms<ConferenceRoom>(conferenceRoomData, 20);
let bigRooms = getBigRooms(partyTentData, 20);
console.log(bigRooms);

let getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T>;


// let junkDrawer: any[] = ['cool string', 42, true];

// // let companies: Array<string> = ['Microsoft', 42, true];
// let companies: Array<string> = ['Microsoft', 'Google', 'Apple'];
// let primeNums: Array<number> = [1, 2, 3];

// let lastValue = primeNums.pop();


