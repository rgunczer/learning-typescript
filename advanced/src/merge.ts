export function mergeTest() {

    console.log(':: Merge Test ::');

    function merge<T, U>(obj1: T, obj2: U): T & U {
        return Object.assign({}, obj1, obj2);
    }

    const ob1 = {
        id: 1,
        name: 'apple'
    };

    const ob2 = {
        color: 'red',
        age: 12
    };

    const ob3 = merge(ob1, ob2);
    console.log({ ob1, ob2, ob3 });

}
