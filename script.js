const enterData = () => {
    const inputField = document.getElementById('inputField');
    const outputField = document.getElementById('myInput');
    outputField.value = inputField.value;
  };
  
  const ascendingOrder = () => {
    // Perform sorting logic
    const sortedArr = defaultarrvalue.slice().sort();
    document.getElementById('myInput').value = sortedArr.join(', ');
  };
  
  const descendingOrder = () => {
    // Perform sorting logic
    const sortedArr = defaultarrvalue.slice().sort().reverse();
    document.getElementById('myInput').value = sortedArr.join(', ');
  };
  
  const toUpperCase = () => {
    // Perform uppercase conversion logic
    const upperCaseArr = defaultarrvalue.map(item => item.toUpperCase());
    document.getElementById('myInput').value = upperCaseArr.join(', ');
  };
  
  const toLowerCase = () => {
    // Perform lowercase conversion logic
    const lowerCaseArr = defaultarrvalue.map(item => item.toLowerCase());
    document.getElementById('myInput').value = lowerCaseArr.join(', ');
  };
  
  const itemsStartingWithB = () => {
    // Perform filtering logic
    const filteredArr = defaultarrvalue.filter(item => item.charAt(0).toUpperCase() === 'B');
    document.getElementById('myInput').value = filteredArr.join(', ');
  };
  
  const findIndex = () => {
    // Perform find index logic
    const enteredValue = prompt('Enter a value:');
    const index = defaultarrvalue.findIndex(item => item === enteredValue);
    document.getElementById('myInput').value = index;
  };
  
  const mergeArrays = () => {
    // Perform array merging logic
    const dummyArr = ['apple', 'banana', 'cherry'];
    const mergedArr = [...defaultarrvalue, ...dummyArr];
    document.getElementById('myInput').value = mergedArr.join(', ');
  };
  
  const defaultarrvalue = ['astra', 'book', 'paper', 'bus', 'deep', 'nehal'];
  