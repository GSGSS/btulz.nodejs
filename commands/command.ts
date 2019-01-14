/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as yargs from "yargs";
export abstract class CommandModule<T, U> implements yargs.CommandModule<T, U> {
    aliases: string | ReadonlyArray<string>;
    describe: string | false;
    command: string | ReadonlyArray<string>;
    builder: yargs.CommandBuilder<T, U>;
    abstract handler(args: yargs.Arguments<U>): void;
}