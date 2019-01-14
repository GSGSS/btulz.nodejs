/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as yargs from "yargs";
import { CommandModule } from "../command";
class TypesUI5 extends CommandModule<string, {}> {
    constructor() {
        super();
        this.command = "types ui5";
        this.describe = "create openui5 type files.";
    }
    handler(args: yargs.Arguments<string>): void {
        console.log(args);
    }
}
export default new TypesUI5();