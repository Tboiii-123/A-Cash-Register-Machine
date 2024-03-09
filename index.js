// let namee ="Lawal Hussein";

// let age = 19;
// let  occupation ="Software Engineer";

// console.log(namee);
// console.log(age);
// console.log(occupation);




//A Cash Register Machine
cart =[]
var Items={
    "Phone":300,
    "Smart Tv":220,
    "Gaming Console":150,
}
function viewCart(){
    for(var key in Items){
        console.log(`${key}: ${Items[key]}`);
    }
    
}

function additem(item){
   if(item=="Phone"){
         console.log("Product added to cart successfully");
        cart.push(Items[item]);
   }     
   else if(item=="Smart Tv"){
    console.log("Product added to cart successfully");
    cart.push(Items[item]);
   }
   else if(item=="Gaming Console"){
    console.log("Product added to cart successfully");
        cart.push(Items[item]);
   }
   else{
    console.log("The item is not available")
   }
}

function TotalPrice(){
   let sum=0;
   
    for(let i=0; i<cart.length ;i++){
        sum+=cart[i];
    }
    if (sum>400){
        discount =sum *0.10;
        console.log("The total amount with dicscounted added is: ",discount);
    }
    else{
        console.log("The total amount with discount  not added :",sum);
    }
    
}


function TotalPriceForPay(){
    let sum=0;
     for(let i=0; i<cart.length ;i++){
         sum+=cart[i];
     }
     return sum;
     
 }
 
function pay(amount){
    let  TotalAmount =TotalPriceForPay();
    if(cart.length ==0){
            console.log("The cart is empty");
    }else{
        
    if(amount==TotalAmount){
        console.log("You just purchased all the item you have in your Cart.Thanks");
    }
    else if(amount>TotalAmount){
        let chnage =amount-TotalAmount;
        console.log("You just purchased all the item you have in your Cart.Thanks");
        console.log("Change to be given is:", chnage );
    }
    else{
        console.log("Sorry you dont have enough to purchase your Items");
    }
    }
    
}
