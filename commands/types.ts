/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as yargs from "yargs";
import { CommandModule } from "./command";
class Types extends CommandModule<string, {}> {
    constructor() {
        super();
        this.command = "types <command>";
        this.describe = "types command list";
        this.builder = function (args: yargs.Argv<string>): yargs.Argv<{}> {
            return yargs.commandDir("types");
        };
    }
    handler(args: yargs.Arguments<string>): void {
        console.log(args);
    }
}
export default new Types();