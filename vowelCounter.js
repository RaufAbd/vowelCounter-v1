function vowelCounter() {

    const vowels = ['a', 'o', 'u', 'e', 'i', 'ə', 'ü', 'ö', 'ı'];

    let count = 0;
    let result = [];
    let text = prompt('please enter some word or text:'); 

    for (let letter of text) {
        vowels.forEach( vowel => {
            if(letter == vowel) {
                count += 1;
                result.push(letter);
            }
        })
    }
    console.group('result')
    console.log(`count of vowels: ${count}`)
    console.log(`vowels: ${result}`)
    console.groupEnd()

    return (count, result)
}


vowelCounter()