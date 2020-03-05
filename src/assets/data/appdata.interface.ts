export interface ApplicationProcess {
    applicationId: false | string;
    Step1: false | {
        application: {
            '$300 Certified Check': {
                received: boolean;
                date: Date | false;
            };
            'Completed Application': {
                applicationId: string | false;
                link?: string;
                received: Date | false;
            };
            'Tax Print Out and Variance Request Receipt': {
                received: Date | false;
            };
            '24 x 36 Plans (Signed and Sealed 5 Full Sets)': {
                elements: {
                    'Site Plan': boolean;
                    'Floor Plans': boolean;
                    'Elevations': boolean;
                    'Lighting Plan': boolean;
                    'Landscape Plan': boolean;
                };
                link?: string;
                received: Date | false;
            };
            '11 x 17 Plans (1 Full Set)': {
                link?: string;
                received: Date | false;
            };
            'Survey/Boundary and Topographic Plans (Signed and Sealed 5 Full Sets)': {
                link?: string;
                received: Date | false;
            };
            'Storm Water and/or Traffic Report (if required) (5 Full Sets)': {
                link?: string;
                notes: "See attached Dept. of Engineering checklist";
                received: Date | false;
            };
            'Color Photo(s) (if needed)': {
                link?: string;
                received: Date | false;
            };
            'USB or CD of Plans': {
                link?: string;
                received: Date | false;
            };
            notes: [
                "Please request the Original Variance Request Form (Property Owner's List) from the Tax Assessor's Office Rm. 101",
                "Page 6, Section D of the application must be signed by the Tax Collector Rm. 104"
            ];
        };
        escrow: {
            amount: number | "not determined";
            received: boolean;
            date: Date | false;
        };
        LHPCReview: {
            required: false | [
                {
                    historicBldg: boolean;
                    historicDistrict: boolean;
                },
                {
                    status: "not completed" | {determination: string;}
                }
            ];
        };
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    };
    Step2: false | {
        zoningDetermination: "not completed" | {
            board: "CPB" | "ZBA" | "Both" | "Other";
            date: Date | false;
            variancesNeeded?: Array<string>; 
        };
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    };
    Step3: false | {
        completenessLetter: "not received" | Date;
        requiredReviews: "not completed" | {
            planning: {
                link?: string;
                notes?: Array<string>;
                completed: Date | false;
            };
            engineering: {
                link?: string;
                notes?: Array<string>;
                completed: Date | false;
            };
            waterSewer: {
                link?: string;
                notes?: Array<string>;
                completed: Date | false;
            };
            surveyor: {
                link?: string;
                notes?: Array<string>;
                completed: Date | false;
            };
        };
        environmentalReview: "not applicable" | "not completed" | {
            link?: string;
            notes?: Array<string>;
            completed: Date | false;
        }
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    };
    Step4: false | {
        fees: "not paid" | {
            link?: string;
            date: Date | false;
        };
        hearing: "not scheduled" | [{
            board: "CPB" | "ZBA" | "Other";
            date: Date | false;
        }];
        approved: false | {
            decision: "approved" | "not approved";
            date: Date | false;
            conditions: "none" | Array<string>;
        };
        conditionReviews: "not applicable" | "not completed" | [{
            date: Date | false;
            notes: string;
        }];
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    };
    Step5: false | {
        "Compliance letters from related depts": "not completed" | [{
            status: string | "not completed";
            dept: string;
            notes?: Array<string>;
        }] | [{
            link?: string;
            date: Date | false;
            notes?: Array<string>;
        }];
        revisedDrawings: "not applicable" | "not completed" | {
            link?: string | Array<string>;
            date: Date | false;
            notes?: Array<string>;
        };
        bondIssued: false | {
            date: Date | false;
            link?: string | Array<string>;
            notes?: string | Array<string>;
        };
        conditionsMet: "not applicable" | "not completed" | true;
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    };
    Step6: false | {
        permitIssued: false | {
            link?: string | Array<string>;
            notes?: string | Array<string>;
            permitId: number | string;
            status: "not issued" | string;
        };
        coIssued: false | {
            coId: number | string;
            link?: string | Array<string>;
            notes?: string | Array<string>;
            status: "not issued" | string;
        };
        dateStarted: Date | "not started";
        dateFinished: Date | "not finished";
    }
};
export const defaultApp: ApplicationProcess = {
    applicationId: false,
    Step1: {
        application: {
            '$300 Certified Check': { received: false, date: false},
            'Completed Application': { applicationId: false, received: false},
            'Tax Print Out and Variance Request Receipt': { received: false },
            '24 x 36 Plans (Signed and Sealed 5 Full Sets)': {
                elements: {
                    'Site Plan': false,
                    'Floor Plans': false,
                    'Elevations': false,
                    'Lighting Plan': false,
                    'Landscape Plan': false
                },
                received: false
            },
            '11 x 17 Plans (1 Full Set)': { received: false },
            'Survey/Boundary and Topographic Plans (Signed and Sealed 5 Full Sets)': { received: false },
            'Storm Water and/or Traffic Report (if required) (5 Full Sets)': { notes: "See attached Dept. of Engineering checklist", received: false },
            'Color Photo(s) (if needed)': { received: false },
            'USB or CD of Plans': { received: false },
            notes: [
                "Please request the Original Variance Request Form (Property Owner's List) from the Tax Assessor's Office Rm. 101",
                "Page 6, Section D of the application must be signed by the Tax Collector Rm. 104"
            ]
        },
        escrow: { amount: 'not determined', received: false, date: false },
        LHPCReview: { required: false },
        dateStarted: "not started",
        dateFinished: "not finished"
    },
    Step2: {
        zoningDetermination: "not completed",
        dateStarted: "not started",
        dateFinished: "not finished"
    },
    Step3: {
        completenessLetter: "not received",
        requiredReviews: "not completed",
        environmentalReview: "not applicable",
        dateStarted: "not started",
        dateFinished: "not finished"
    },
    Step4: {
        fees: "not paid",
        hearing: "not scheduled",
        approved: false,
        conditionReviews: "not applicable",
        dateStarted: "not started",
        dateFinished: "not finished"
    },
    Step5: {
        "Compliance letters from related depts": "not completed",
        revisedDrawings: "not applicable",
        bondIssued: false,
        conditionsMet: "not applicable",
        dateStarted: "not started",
        dateFinished: "not finished"
    },
    Step6: {
        permitIssued: false,
        coIssued: false,
        dateStarted: "not started",
        dateFinished: "not finished"
    }
};
