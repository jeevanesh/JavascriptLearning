let employee = 
{
    empname : "scott",
    empid : 101,
    job : "Manager",
    basicSal : 50000,

    // method
    bonus : function()
    {
        return this.basicSal * 0.10;
    }
};

console.log(employee.empname);
console.log(employee.bonus());
