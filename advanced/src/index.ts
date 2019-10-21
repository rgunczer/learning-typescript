import { builderTest } from './builder';
import { mergeTest } from './merge';
import { keyofTest } from './keyof';

function execute(fn: Function): void {
    fn();
    console.log('\n\n');
}

execute(() => console.log('Hello from TS!'));
execute(mergeTest);
execute(builderTest);
execute(keyofTest);
