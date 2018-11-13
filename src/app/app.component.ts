import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  outputscreen: string='';
  operation: any=null;
  runningtotal:number=0;
  


  
output(value: string) 
{ 
    console.log("cliicked");
    this.outputscreen =this.outputscreen+value;
    this.runningtotal=Number(this.outputscreen);
}
  operationclear()
  {
    this.outputscreen=null;
    this.operation=null;
  }
  
  operator(val: any)
  { 
    switch(val)
    {
      case '+':this.operation=val;
      break;
      case '-':this.operation=val;
      break;
      case '*':this.operation=val;
      break;
      case '/':this.operation=val;
      break;
    }
    this.operationequal(val);
  }

  operationequal(value)
  {
    if(this.operation=== '+')
    { 
      this.runningtotal+=Number(this.outputscreen);
      console.log(this.runningtotal);
    }
    else if(this.operation==='-') 
    {

      this.runningtotal=this.runningtotal - Number(this.outputscreen);
      console.log(this.runningtotal);

    }
    else if(this.operation==='*') 
    {
      this.runningtotal=this.runningtotal * Number(this.outputscreen);

    }
    else if(this.operation==='/') 
    {
      this.runningtotal=this.runningtotal / Number(this.outputscreen);

    }
     

  }
}