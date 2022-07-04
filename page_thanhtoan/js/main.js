
function logShow2() {
  let myStr='';
  for(let param of arguments)
  myStr += param;
  console.log(
    `${myStr} $ `);

    function logShow() {
      console.log(arguments);
    }

    logShow('hi',"ha","ho");
}
 

logShow2('ho','chi','minh');