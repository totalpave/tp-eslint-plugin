"use strict";
// // tslint:disable
// import {
//     Application,
//     MySQLDatabase,
//     Logger,
//     LogSeverity,
//     Handler,
//     Request,
//     Response,
//     Database
// } from '@breautek/storm';
// export class TestLogger extends Logger {};
// class TestHandler extends Handler {
//     public constructor(app: Application) {
//         super(app);
//     }
//     protected _get(_request: Request, response: Response): void {
//         response.success();
//     }
//     protected _post(request: Request, response: Response): void {
//         response.send(request.getBody());
//     }
//     protected _put(request: Request, response: Response): void {
//         response.send(request.getBody());
//     }
//     protected _delete(request: Request, response: Response): void {
//         response.send(request.getBody());
//     }
// }
// const ERRORS_ONLY: LogSeverity = LogSeverity.TRACE | LogSeverity.INFO | LogSeverity.ERROR | LogSeverity.FATAL;
// export class TestApplication extends Application {
//     constructor(severity?: LogSeverity) {
//         super("TestApplication", "./spec/support/", severity === undefined ? ERRORS_ONLY : severity);
//     }
//     protected attachHandlers(): Promise<void> {
//         this.attachHandler('/echo', TestHandler);
//         return Promise.resolve();
//     }
//     protected _createLogger(): Logger {
//         return new TestLogger(this.getName());
//     }
//     public initDB(config: any): Promise<Database> {
//         var db: MySQLDatabase = new MySQLDatabase();
//         db.addMaster(config.master_database);
//         db.addSlave('1', config.slave_database_001);
//         return Promise.resolve(db);
//     }
//     public getDefaultLogLevel(): LogSeverity {
//         return this._getDefaultLogLevel();
//     }
//     protected _getDefaultLogLevel(): LogSeverity {
//         return LogSeverity.TRACE;
//     }
// }
//# sourceMappingURL=TestApplication.js.map