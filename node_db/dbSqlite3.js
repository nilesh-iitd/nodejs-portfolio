export class dbSqlite3 {
    constructor(filename) {
        this.filename = filename;
    }

    createTable(tblName, tblCols) {
        if (count(tblCols) <= 0)
            return false;
        let query = 'CREATE TABLE ' + tblName;
    }
}