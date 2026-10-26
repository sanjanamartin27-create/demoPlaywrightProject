import XLSX from 'xlsx'
export function readExcelFile(row, column) {
    const workbook = XLSX.readFile('utils/TestData.xlsx')
    const sheet = workbook.Sheets['data'] // Specify the sheet name ,sheets inbuilt
    const cellAddress=XLSX.utils.encode_cell({r:row-1,c:column-1}) // Convert row and column to cell address,utils is a func
    const cell=sheet[cellAddress] // Get the cell object
    return cell ? cell.v :undefined// Return the cell value or null if the cell is empty,used ternary opr

}