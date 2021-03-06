export enum chartToRender {
    MonthlyPremium = 'MonthlyPremium',
    SubmissionToBound = 'SubmissionToBound',
    LOBRenewal = 'LOBRenewal'
}
export class chartsConfig {
    // For Monthly Premium Report
    
    public static labelsForNewBusiness = [
        'JAN', 'FEB', 'MAR', 'APR',
        'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC'
    ];
    public static _avgNBPremiumText = "Average :";
    public static _headingForMonthlyPremium = "MONTHLY PREMIUM REPORT";

    // For Submission to Bound Report
    public static labelsFor_SubmissionToBound_Chart = [
        "submission",
        "quoted",
        "bound",
    ];
    public static _submissionToBoundRatio = "SUBMISSION TO BOUND RATIO";
    public static _ratio = "Ratio : ";

    // For LOB Renewal Premium report
    public static _LobReport = 'LOB NEW BUSINESS PREMIUM ';
    public static _total = "Total Premium : ";
}
