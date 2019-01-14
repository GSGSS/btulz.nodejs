/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as yargs from "yargs";
const argv: any = yargs.commandDir("commands")
    .demand(1)
    .help()
    .locale("en")
    .showHelpOnFail(true, "Specify --help for available options")
    .argv;