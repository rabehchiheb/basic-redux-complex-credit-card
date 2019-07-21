function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = '0' + val;
    }
  
    if (val.length === 2) {
      if (Number(val) === 0) {
        val = '01';
  
      //this can happen when user paste number
    } else if (val > max) {
        val = max;
      }
    }
  
    return val;
  }
  
  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), '12');
    
    let year = val.substring(2, 5);

 
    return month + (year.length ? '' + year : '')
    ;
  }
  
 

export const CHNG_NUMBER = () => {
    const num = document.getElementById("NUMBERCARD").value;
    //console.log(num);
    return {
    type: 'CHNG_NUMBER',
    NUMBERCARD: num
    }
  }
  
  export const CHNG_NAME = count => {
    const num =document.getElementById("NAMERCARD").value;
    return {
      type: 'CHNG_NAME',
      NAMECARD: num
    }
  }

  export const CHNG_DATE = () => {
    const num =cardExpiry (document.getElementById("DATECARD").value);
    return {
      type: 'CHNG_DATE',
      DATECARD: num
    }
  }