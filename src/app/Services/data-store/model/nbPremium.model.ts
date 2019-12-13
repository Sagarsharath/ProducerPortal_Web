export class NBPremium {
    averagePremium: Number;
    spans: SpanData[];
}
export class SpanData {
    spanName: string;
    totalPremium: Number;
}
export class SubmissionToBound_Model {
    submission: Number;
    quoted: Number;
    bound: Number;
    submissionToBoundRatio : Number
}
export class LobnbPremium_Model{
   description: string;
    totalGrossRevenue: Number;
    totalNETRevenue: Number;
    premium : number;
}