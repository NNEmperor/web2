import { CallBack } from "./call-back";

export class IncidentFinal {
    Id!: number;
    Type!: string;
    Priority!: number;
    Confirmed!: boolean;
    Description!: string;
    ETA!: string;
    ATA!: string;
    ETR!: string;
    Outage!: string; /**when incident happened */
    Affected!: number;
    NumCalls!: number;
    Voltage!: number;
    Estimated!: string; /**start of repair planed */
    Status!: string;
    Cause!: string;
    SubCause!: string;
    TypeR!: string;
    Material!: string;
    Devices!: number[];
    Calls!: CallBack[]
}
