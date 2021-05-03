const XLSX = require('xlsx');

const getJsonFromXlsx = (buffer) => {
    var wb = XLSX.read(buffer, {type:'buffer'});
    let data = []
  
    const sheets = wb.SheetNames
    
    for(let i = 0; i < sheets.length; i++)
    {
        const temp = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[i]], {defval:""})
        temp.forEach((res) => {
            data.push(res)
        })
    }
    return data;
}

module.exports = getJsonFromXlsx;