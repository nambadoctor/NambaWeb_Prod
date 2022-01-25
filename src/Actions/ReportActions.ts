import IReportIncomingData from "../Types/IncomingDataModels/ReportIncoming";

export function FilterAllAndCurrentReports (currentAppointmentReports:IReportIncomingData[], allAppointmentReports:IReportIncomingData[]) {
    var currentReportIds:string[] = {} as string[]

    currentAppointmentReports.forEach(report => {
        currentReportIds.push(report.reportId);
    });

    var reportsToReturn = {} as IReportIncomingData[];

    allAppointmentReports.forEach(report => {
        if (currentReportIds.includes(report.reportId)) {
            reportsToReturn.push(report);
        }
    });

    return reportsToReturn
} 