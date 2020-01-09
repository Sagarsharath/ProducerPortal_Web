export class NBorRBPremium {
    averagePremium: Number;
    spans: SpanData[];
}
export class SpanData {
    spanName: string;
    totalPremium: Number;
}
export class PIFModel {
    spanName: string;
    pifCount: Number;
}
export class SubmissionToBound_Model {
    submission: Number;
    quoted: Number;
    bound: Number;
    submissionToBoundRatio : Number
}
export class CarrierModel {
    carrierName: string;
    totalGrossRevenue: Number;
    totalNetRevenue: Number;
    premium : Number
}
export class LobPremium_Model{
    description: string;
    totalGrossRevenue: Number;
    totalNETRevenue: Number;
    premium : number;
}
// export 
