export function builderTest() {

    console.log(':: Builder Test ::');

    class Collector {

        arr: string[] = [];

        add(arg: string): Collector {
            this.arr.push(arg);
            return this;
        }

        collect(separator: string): string {
            return this.arr.join(separator);
        }
    }

    const test = new Collector()
        .add('apple')
        .add('kiwi')
        .add('latte')
        .collect('?');

    console.log(`collector is collected [${test}]`);

}
