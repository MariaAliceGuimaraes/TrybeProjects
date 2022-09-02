from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.utils import get_stocked_by_company


class CompleteReport(SimpleReport):
    @classmethod
    def generate(classmethod, stock):
        report_return = super().generate(stock)
        company_stock_item = get_stocked_by_company(stock)
        return report_return + "\n" + company_stock_item