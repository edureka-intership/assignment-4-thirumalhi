

const orderData = {
  'Below 500': 20,
  '500-1000': 29,
  '1000-1500': 30,
  '1500-2000': 44,
  'Above 2000': 76
};

const total = Object.values(orderData).reduce((prev, next) => prev + next);  


const headers = Object.keys(orderData); 

 
const response = headers.map((item, index) => {  
  return {
    'id': index + 1,
    'restaurant': 'Punjabi Tadka',
    'order': item,
    'order percentage': ((orderData[item] / total) * 100).toFixed(2)
  }
})
console.log(total)