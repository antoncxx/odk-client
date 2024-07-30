import { MathUtils } from '@library1/MathUtils';
import { Arrays } from '@library2/Arrays';
import { UselessKit } from '@odk/UselessKit';

console.log('Hello world');

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const e1 = UselessKit.compareArrays(arr1, arr2);
const e2 = Arrays.equal(arr1, arr2);

console.log(`Expect ${e1} to be ${e2}`);

console.log(
  `Clamp result of -2 in range of [0, 1] is ${MathUtils.clamp(-2, 0, 1)}`,
);
