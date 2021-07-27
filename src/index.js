import './index.css';

const items = [

  {name: 'Leah',  surname: 'Makgatho',   age: 29, locaion: 'Mafefe', message: 'You are old enough to code'},
  {name: 'Kabo',  surname: 'Rapholo',   age: 3, locaion: 'Mafefe', message: 'You are not old enough to code'},
  {name: 'Lesego',  surname: 'Nkadimeng',   age: 30, locaion: 'Mafefe', message: 'You are old enough to code'},
  {name: 'Tebogo',  surname: 'Masipa',   age: 27, locaion: 'Mafefe', message: 'You are old enough to code'},
  {name: 'Math',  surname: 'Mashiane',   age: 23, locaion: 'Mafefe',message: 'You are old enough to code'},
  {name: 'Tebogo',  surname: 'Mahlangu',   age: 8, locaion: 'Mafefe', message: 'You are not old enough to code'},

]

const filteredItems = items.filter((item) => {
  return item.age > 18
})

console.log(filteredItems)