import { MathUtils } from '@library1/MathUtils';
import { Arrays } from '@library2/Arrays';
import { UselessKit } from '@odk/UselessKit';

process.stdout.write('Hello world\n');

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const e1 = UselessKit.compareArrays(arr1, arr2);
const e2 = Arrays.equal(arr1, arr2);

process.stdout.write(`Expect ${e1} to be ${e2}\n`);

process.stdout.write(
  `Clamp result of -2 in range of [0, 1] is ${MathUtils.clamp(-2, 0, 1)}\n`,
);
