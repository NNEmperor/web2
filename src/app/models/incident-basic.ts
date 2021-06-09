export class IncidentBasic {
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
    Estimated!: string /**start of repair planed */
    Status!: string
}

