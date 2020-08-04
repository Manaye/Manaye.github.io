function Computer(ram,cpu,storage) {
    this.ram = ram;
     this.cpu = cpu;
     this.storage =storage;

};   
Computer.prototype.runProgram = function (program) {
    consol.log("running program" + program);
}
function Laptop(ram,cpu,storage,battery) {
    this.ram = ram;
     this.cpu = cpu;
     this.storage =storage;
     this.battery= battery;
}
Laptop.prototype.carryAround=function(){
    console.log("carry laptop:cpu"+ this.cpu + "ram="+this.ram+"storage="+this.storage+"battery:"+this.battery);
};   
let laptop = new Laptop("1.2","4GB","2Tb","40%");
laptop.carryAround();
