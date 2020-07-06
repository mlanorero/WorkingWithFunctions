const rapid = (string) => {
  for(let i = 0; i<string.length; i++){
      return string.replace(/[aeiou]/ig,'').toUpperCase();
  }
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));