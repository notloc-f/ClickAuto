var app = new Vue({
el:'#JobData',
data:{
  custNum:0,
  toGetTitle:'First Name',
  toGetInfo:'',
  toGetTemp:'Enter your first name here',
  custFirst:'',
  custPhone:'',
  custLast:'',
  custEmail:'',
  carMake:'',
  carModel:'',
  problem:'',
  custComments:'',
  customerData:[],
  allInfo:'',
  display:true,

},

  computed:{
  printCustomerInfo: function(){
    console.log('Something');
    var allCustomers;
    var oneCustomer;
    for(var i; i < customerData.size();i++){
      oneCustomer= "<p>" + customerData.first + " " + customerData.last + " " + customerData.phone + " " + "<br> </p>";
      allCustomers= allCustomers + oneCustomer;
      oneCustomer ='';
    }
    alert('this ' + oneCustomer);
    return allCustomers;
  }
},
watch:{
  display: function(){
  }
},
  methods:{
  addField: function(){
  //   if(!(this.custNum in this.customerData)){
  //   alert('first one');
  // //  Vue.set(app.customerData,this.custNum,{first:this.custFirst,last:this.custLast});
  // Vue.set(this.customerData,this.custNum,new Object);
  //   }
    this.custNum=this.custNum +1;
//    console.log(this.custNum);
  //  console.log(this.custFirst);
    this.customerData.push({first:this.custFirst,last:this.custLast,phone:this.custPhone,email:this.custEmail,carMake:this.carMake,carModel:this.carModel,
comments:this.custComments,problem:this.problem});
this.custFirst='';
this.custLast='';
this.custPhone='';
this.custEmail='';
this.carMake='';
this.carModel='';
this.problem='';
this.custComments='';
 //  this.customerData[this.custNum].push({first:this.custFirst});
  //  console.log(this.custNum)
  },
  toggle: function(){
    if(this.display===true){
      this.display= false;
    }
    else{
      this.display=true;
    }
  },

}
});
