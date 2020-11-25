import * as util from "../../../util/util.js";
import * as LOGUTIL from "../../../util/log.js";
const { log, logGrid, logSolution, trace } = LOGUTIL;
const YEAR = 2017;
const DAY = 1;
const DEBUG = false;
LOGUTIL.setDebug(DEBUG);
// solution path: /Users/trevorsg/t-hugs/advent-of-code/years/2017/01/index.ts
// data path    : /Users/trevorsg/t-hugs/advent-of-code/years/2017/01/data.txt
// problem url  : https://adventofcode.com/2017/day/1
async function p2017day1_part1(input) {
    let sum = 0;
    for (let i = 0; i < input.length; ++i) {
        let dig = input[i];
        let next = i === input.length - 1 ? input[0] : input[i + 1];
        if (dig === next) {
            sum += parseInt(dig, 10);
        }
    }
    return sum;
}
async function p2017day1_part2(input, part1Solution) {
    let sum = 0;
    for (let i = 0; i < input.length; ++i) {
        let dig = input[i];
        let next = input[(i + input.length / 2) % input.length];
        if (dig === next) {
            sum += parseInt(dig, 10);
        }
    }
    return sum;
}
async function run() {
    const input = await util.getInput(DAY, YEAR);
    const part1Solution = String(await p2017day1_part1(input));
    const part2Solution = String(await p2017day1_part2(input, part1Solution));
    logSolution(part1Solution, part2Solution);
}
run()
    .then(() => {
    process.exit();
})
    .catch(error => {
    throw error;
});
