const first = [1, 2, 3]
const second = [4, 5, 6]

// spread operator
const combined = [...first, ...second]
const clone = [...first]


const firstO = { name: 'Mosh' };
const secondO = { job: 'Instructor' };

const combinedObject = {
  ...firstO, ...secondO, 
  location: 'Australia'
}

const cloneO = { ...first };