import IReportIncomingData from '../Types/IncomingDataModels/ReportIncoming';

export function FilterAllAndCurrentReports(
    currentAppointmentReports: IReportIncomingData[] | null,
    allAppointmentReports: IReportIncomingData[],
) {
    var reportsToReturn: IReportIncomingData[] = [];

    if (currentAppointmentReports && currentAppointmentReports.length > 0) {
        var currentReportIds: string[] = [];

        currentAppointmentReports.forEach((report) => {
            currentReportIds.push(report.reportId);
        });

        allAppointmentReports.forEach((report) => {
            if (!currentReportIds.includes(report.reportId)) {
                reportsToReturn.push(report);
            }
        });
    } else {
        reportsToReturn = allAppointmentReports;
    }

    return reportsToReturn;
}
