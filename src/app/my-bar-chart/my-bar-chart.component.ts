import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';
import { NgForm } from '@angular/forms';
import {DataService} from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { IfStmt } from '@angular/compiler';
import { element } from '@angular/core/src/render3/instructions';
import { MyChartLocal } from './my-bar-chart-local.class'
import {FileUploadModule, FileUploader} from  'ng2-file-upload/ng2-file-upload';
//import {HttpClient} from '@angular/http';
const URL = 'http://localhost:4200/api/upload';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  objectKeys = Object.keys;
  chartData = [];
  customer = new Customer();
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'file'});
  //arrBirds: any =  [];
 
//cpu
  numerofwarningsytem: number=0;
  numberofcriticalsystem: number=0;
  numberofsuccsystem: number=0;
  numerofwarninguser: number=0;
  numberofcriticaluser: number=0;
  numberofsuccuser: number=0;
  numerofwarningnice: number=0;
numberofcriticalnice: number=0;
numberofsuccnice: number=0;
upwardtrendsytem: number=0;
Downwardtrendsystem:number=0;
upwardtrenduser: number=0;
Downwardtrenduser:number=0;
upwardtrendnice: number=0;
Downwardtrendnice:number=0;


//for memory
numerofwarningmean: number=0;
    numberofcriticalmean: number=0;
  numberofsuccsmean: number=0;
  numerofwarningswap: number=0;
  numberofcriticalswap: number=0;
  numberofsuccswap: number=0;
  upwardtrendmean: number=0;
Downwardtrendmean:number=0;
upwardtrendswap: number=0;
Downwardtrendswap:number=0;

public localObj = new MyChartLocal();

//For cpu system
two_sigma_UCL_flag_cpu_raw_system1: number=0;
two_sigma_LCL_flag_cpu_raw_system1: number=0;

three_sigma_UCL_flag_cpu_raw_system1: number=0;
three_sigma_LCL_flag_cpu_raw_system1: number=0;

one_sigma_UCL_flag_cpu_raw_system1: number=0;
one_sigma_LCL_flag_cpu_raw_system1: number=0;

//123, system


//123 user

two_sigma_UCL_flag_cpu_raw_system2: number=0;
two_sigma_LCL_flag_cpu_raw_system2: number=0;

three_sigma_UCL_flag_cpu_raw_system2: number=0;
three_sigma_LCL_flag_cpu_raw_system2: number=0;

one_sigma_UCL_flag_cpu_raw_system2: number=0;
one_sigma_LCL_flag_cpu_raw_system2: number=0;

//123 nice
two_sigma_UCL_flag_cpu_raw_system3: number=0;
two_sigma_LCL_flag_cpu_raw_system3: number=0;

three_sigma_UCL_flag_cpu_raw_system3: number=0;
three_sigma_LCL_flag_cpu_raw_system3: number=0;

one_sigma_UCL_flag_cpu_raw_system3: number=0;
one_sigma_LCL_flag_cpu_raw_system3: number=0;

//123, mean

two_sigma_UCL_flag_mem_real: number=0;
two_sigma_LCL_flag_mem_real: number=0;

three_sigma_UCL_flag_mem_real: number=0;
three_sigma_LCL_flag_mem_real: number=0;

one_sigma_UCL_flag_mem_real: number=0;
one_sigma_LCL_flag_mem_real: number=0;
//123 swap

two_sigma_UCL_flag_mem_swap: number=0;
two_sigma_LCL_flag_mem_swap: number=0;

three_sigma_UCL_flag_mem_swap: number=0;
three_sigma_LCL_flag_mem_swap: number=0;

one_sigma_UCL_flag_mem_swap: number=0;
one_sigma_LCL_flag_mem_swap: number=0;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
     };
 

public ID= [];
  public week = [];
  resultValues : any = [];
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  public barChartType = 'line';

  public barChartLegend = true;
 // public barChartLabels;
  public barChartData;
  public items = [];
  public colors1 =[];
  
  
  // for a while santosh data
   constructor(private ser: DataService) {   }
  

   ngOnInit() {

    this.items = [
      //  {type: "CPU System", warning:this.numerofwarningsytem, critical:13, success:34, upward:45, downward:50},
      // {type: "CPU User" , warning:13, critical:1656, success:56, upward:45, downward:50},
      // {type: "CPU nice" , warning:13, critical:156, success:34, upward:45, downward:50},
      // {type: "memory mean" , warning:13, critical:156, success:34, upward:45, downward:50},
      // {type: "memory swap" , warning:19, critical:21, success:49, upward:20, downward:90},

    ];

    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.colors1 = [
      {
        backgroundColor: [
          'rgba(255, 0, 0, 0.3)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 0, 255, 0.3)',
          'rgba(255, 0, 0, 0.3)',
          'rgba(255, 0, 0, 0.3)',
          'rgba(255, 0, 0, 0.3)',
         
        
         
        ]
      }
    ]
    this.barChartData  =  [
          {data: [], label: 'CPU_Raw_System', backgroundColor: 'rgba(255, 0, 0, 0.3)' },
          {data: [], label: 'CPU_Raw_User' , backgroundColor:'rgba(0, 255, 0, 0.3)'},
          {data: [], label: 'CPU_Raw_Nice', backgroundColor:'rgba(0, 0, 255, 0.3)'},
          {data: [], label: 'Memory Real',  backgroundColor:'rgba(255,0,112,1,0.3)' },
          {data: [], label: 'Memory Swap', backgroundColor:'rgba(0, 140, 255, 0.3)' },
 
        ];
   
  }
   
  updatechartLabels(data1, addressType){

   
    data1.forEach(element => {
        if(this.ID.indexOf('day '+ element.ID) == -1){
          this.ID.push( 'day '+ element.ID);
        }
        if(addressType=='home1')
        {

        this.barChartData[0].data.push(element.cpu_raw_system);
        this.barChartData[1].data.push(element.cpu_raw_user);
        this.barChartData[2].data.push(element.cpu_raw_nice);
        
       
      }
      if(addressType=='home2')
      {

        this.barChartData[3].data.push(element.mem_real_used);
        this.barChartData[4].data.push(element.mem_swap_used);


     
    }
        // paste here
        // for system raw table

        if(element.warning_flag_cpu_raw_system)
        {
        ++this.numerofwarningsytem;
        }

        if(element.critical_flag_cpu_raw_system)
        {
        ++this.numberofcriticalsystem;
        }
        if(element.successive_diff_flag_cpu_raw_system)
        {
        ++this.numberofsuccsystem;
        }

        //for user

        if(element.warning_flag_cpu_raw_user)
        {
        ++this.numerofwarninguser;
        }

        if(element.critical_flag_cpu_raw_user)
        {
        ++this.numberofcriticaluser;
        }
        if(element.successive_diff_flag_cpu_raw_user)
        {
        ++this.numberofsuccuser;
        }

        // for nice
        if(element.warning_flag_cpu_raw_nice)
        {
        ++this.numerofwarningnice;
        }

        if(element.critical_flag_cpu_raw_nice)
        {
        ++this.numberofcriticalnice;
        }
        if(element.successive_diff_flag_cpu_raw_nice)
        {
        ++this.numberofsuccnice;
        }

//for system

        if(element.correlation_flag_cpu_raw_system =="POS")
        {
          if(element.coeff_flag_cpu_raw_system==true)
          {
          this.upwardtrendsytem++
              }
          }

          
        if(element.correlation_flag_cpu_raw_system =="NEG")
        {
          if(element.coeff_flag_cpu_raw_system==true)
          {
          this.Downwardtrendsystem++
              }
          }


//for user
       



        if(element.correlation_flag_cpu_raw_user=="POS" )
        {
          if(element.coeff_flag_cpu_raw_user==true)
          {
          this.upwardtrenduser++
              }
          }

          
        if(element.correlation_flag_cpu_raw_user=="NEG" )
        {
          if(element.coeff_flag_cpu_raw_user==true)
          {
          this.Downwardtrenduser++
              }
          }

          //for nice

          if(element.correlation_flag_cpu_raw_nice=="POS" )
          {
            if(element.coeff_flag_cpu_raw_nice==true)
            {
            this.upwardtrendnice++
                }
            }

            if(element.correlation_flag_cpu_raw_nice=="NEG" )
          {
            if(element.coeff_flag_cpu_raw_nice==true)
            {
            this.Downwardtrendnice++
                }
            }
      

        // for 1 2 3
       
        //3
        if(element.three_sigma_LCL_flag_cpu_raw_system)
        {
          ++this.three_sigma_LCL_flag_cpu_raw_system1;

        }
        if(element.three_sigma_UCL_flag_cpu_raw_system)
        {
          ++this.three_sigma_UCL_flag_cpu_raw_system1;

        }
        //2
        if(element.two_sigma_LCL_flag_cpu_raw_system)
        {
          ++this.two_sigma_LCL_flag_cpu_raw_system1;

        }
        if(element.two_sigma_UCL_flag_cpu_raw_system)
        {
          ++this.two_sigma_UCL_flag_cpu_raw_system1;

        }
        //1
        if(element.one_sigma_LCL_flag_cpu_raw_system)
        {
          ++this.one_sigma_LCL_flag_cpu_raw_system1;

        }
        if(element.one_sigma_UCL_flag_cpu_raw_system)
        {
          ++this.one_sigma_UCL_flag_cpu_raw_system1;

        }

        //user, 2 one , 123

        //3
        if(element.three_sigma_LCL_flag_cpu_raw_user)
        {
          ++this.three_sigma_LCL_flag_cpu_raw_system2;

        }
        if(element.three_sigma_UCL_flag_cpu_raw_user)
        {
          ++this.three_sigma_UCL_flag_cpu_raw_system2;

        }
        //2
        if(element.two_sigma_LCL_flag_cpu_raw_user)
        {
          ++this.three_sigma_UCL_flag_cpu_raw_system2;

        }
        if(element.two_sigma_UCL_flag_cpu_raw_user)
        {
          ++this.two_sigma_UCL_flag_cpu_raw_system2;

        }
        //1
        if(element.one_sigma_LCL_flag_cpu_raw_user)
        {
          ++this.one_sigma_LCL_flag_cpu_raw_system2;

        }
        if(element.one_sigma_UCL_flag_cpu_raw_user)
        {
          ++this.one_sigma_UCL_flag_cpu_raw_system2;

        }

        // nice , 3 one 123

        //3
        if(element.three_sigma_LCL_flag_cpu_raw_nice)
        {
          ++this.three_sigma_LCL_flag_cpu_raw_system3;

        }
        if(element.three_sigma_UCL_flag_cpu_raw_nice)
        {
          ++this.three_sigma_UCL_flag_cpu_raw_system3;

        }
        //2
        if(element.two_sigma_LCL_flag_cpu_raw_nice)
        {
          ++this.three_sigma_UCL_flag_cpu_raw_system3;

        }
        if(element.two_sigma_UCL_flag_cpu_raw_nice)
        {
          ++this.two_sigma_UCL_flag_cpu_raw_system3;

        }
        //1
        if(element.one_sigma_LCL_flag_cpu_raw_nice)
        {
          ++this.one_sigma_LCL_flag_cpu_raw_system3;

        }
        if(element.one_sigma_UCL_flag_cpu_raw_nice)
        {
          ++this.one_sigma_UCL_flag_cpu_raw_system3;

        }

// for mean

// for memorymean table

if(element.warning_flag_mem_real_used)
{
++this.numerofwarningmean;
}

if(element.critical_flag_mem_real_used)
{
++this.numberofcriticalmean;
}
if(element.successive_diff_flag_mem_real_used)
{
++this.numberofsuccsmean;
}


//for swap
//for memoryswap

if(element.warning_flag_mem_swap_used)
{
++this.numerofwarningswap;
}

if(element.critical_flag_mem_swap_used)
{
++this.numberofcriticalswap;
}
if(element.successive_diff_flag_mem_swap_used)
{
++this.numberofsuccswap;

}


 //for mean

 if(element.correlation_flag_mem_real_used=="POS" )
 {
   if(element.coeff_flag_mem_real_used==true)
   {
   this.upwardtrendmean++
       }
   }

   if(element.correlation_flag_mem_real_used=="NEG" )
 {
   if(element.coeff_flag_mem_real_used==true)
   {
   this.Downwardtrendmean++
       }
   }

   //for swap

 if(element.correlation_mem_swap_used=="POS" )
 {
   if(element.coeff_flag_mem_swap_used==true)
   {
   this.upwardtrendmean++
       }
   }

   if(element.ccorrelation_mem_swap_used=="NEG" )
 {
   if(element.coeff_flag_mem_swap_used==true)
   {
   this.Downwardtrendswap++
       }
   }



// for memory



 // for  mean 1 2 3
       
        //3
        if(element.three_sigma_LCL_flag_mem_real_used)
        {
          ++this.three_sigma_LCL_flag_mem_real;
		  

        }
        if(element.three_sigma_UCL_flag_mem_real_used)
        {
          ++this.three_sigma_UCL_flag_mem_real;

        }
		
        //2
        if(element.two_sigma_LCL_flag_mem_real_used)
        {
          ++this.two_sigma_LCL_flag_mem_real;
          

        }
        if(element.two_sigma_UCL_flag_mem_real_used)
        {
          ++this.two_sigma_UCL_flag_mem_real;
          
        }
        //1
        if(element.one_sigma_LCL_flag_mem_real_used)
        {
          ++this.one_sigma_LCL_flag_mem_real;

        }
        if(element.one_sigma_UCL_flag_mem_real_used)
        {
          ++this.one_sigma_UCL_flag_mem_real;

        }

        // swap , 123

        //3
        if(element.three_sigma_LCL_flag_mem_swap_used)
        {
          ++this.three_sigma_LCL_flag_mem_swap;

        }
        if(element.three_sigma_UCL_flag_mem_swap_used)
        {
          ++this.three_sigma_UCL_flag_mem_swap;

        }
        //2
        if(element.two_sigma_LCL_flag_mem_swap_used)
        {
          ++this.two_sigma_LCL_flag_mem_swap;

        }
        if(element.two_sigma_UCL_flag_mem_swap_used)
        {
          ++this.two_sigma_UCL_flag_mem_swap;

        }
        //1
        if(element.one_sigma_LCL_flag_mem_swap_used)
        {
          ++this.one_sigma_LCL_flag_mem_swap;

        }
        if(element.one_sigma_UCL_flag_mem_swap_used)
        {
          ++this.one_sigma_UCL_flag_mem_swap;

        }
      
 });
    
    console.log(this.barChartData);
    switch(addressType){
      case 'home1': 
     

          this.items.push({
        type:'CPU System',
        warning: this.numerofwarningsytem,
        critical:this.numberofcriticalsystem,
        success: this.numberofsuccsystem,
        upward: this.upwardtrendsytem,
        downward:this.Downwardtrendsystem,
        ThreeLCL: this.three_sigma_LCL_flag_cpu_raw_system1,
        ThreeUCL:this.three_sigma_UCL_flag_cpu_raw_system1,
        twoLCL: this.two_sigma_LCL_flag_cpu_raw_system1,
        twoUCL: this.two_sigma_UCL_flag_cpu_raw_system1,
        oneLCL: this.one_sigma_LCL_flag_cpu_raw_system1,
        oneUCL: this.one_sigma_UCL_flag_cpu_raw_system1
       

      })
      this.items.push({
        type:'CPU User',
        warning: this.numerofwarninguser,
        critical:this.numberofcriticaluser,
        success: this.numberofsuccuser,
        upward: this.upwardtrenduser,
        downward:this.Downwardtrenduser,
        ThreeLCL: this.three_sigma_LCL_flag_cpu_raw_system2,
        ThreeUCL:this.three_sigma_UCL_flag_cpu_raw_system2,
        twoLCL: this.two_sigma_LCL_flag_cpu_raw_system2,
        twoUCL: this.two_sigma_UCL_flag_cpu_raw_system2,
        oneLCL: this.one_sigma_LCL_flag_cpu_raw_system2,
        oneUCL: this.one_sigma_UCL_flag_cpu_raw_system2
       })
      
       this.items.push({
        type:'CPU Nice',
        warning: this.numerofwarningnice,
        critical:this.numberofcriticalnice,
        success: this.numberofsuccnice,
        upward: this.upwardtrendnice,
        downward:this.Downwardtrendnice,
        ThreeLCL: this.three_sigma_LCL_flag_cpu_raw_system3,
        ThreeUCL:this.three_sigma_UCL_flag_cpu_raw_system3,
        twoLCL: this.two_sigma_LCL_flag_cpu_raw_system3,
        twoUCL: this.two_sigma_UCL_flag_cpu_raw_system3,
        oneLCL: this.one_sigma_LCL_flag_cpu_raw_system3,
        oneUCL: this.one_sigma_UCL_flag_cpu_raw_system3
       })
      
       

      case 'home2':     
      this.items.push({
        type:'Memory Real',
        warning: this.numerofwarningmean,
        critical:this.numberofcriticalmean,
        success: this.numberofsuccsmean,
        upward: this.upwardtrendmean,
        downward:this.Downwardtrendmean,
        ThreeLCL: this.three_sigma_LCL_flag_mem_real,
        ThreeUCL:this.three_sigma_UCL_flag_mem_real,
        twoLCL: this.two_sigma_LCL_flag_mem_real,
        twoUCL: this.two_sigma_UCL_flag_mem_real,
        oneLCL: this.one_sigma_LCL_flag_mem_real,
        oneUCL: this.one_sigma_UCL_flag_mem_real
       })
      
       this.items.push({
        type:'Memory Swap',
        warning: this.numerofwarningswap,
        critical:this.numberofcriticalswap,
        success: this.numberofsuccswap,
        upward: this.upwardtrendswap,
        downward:this.Downwardtrendswap,
        ThreeLCL: this.three_sigma_LCL_flag_mem_swap,
        ThreeUCL:this.three_sigma_UCL_flag_mem_swap,
        twoLCL: this.two_sigma_LCL_flag_mem_swap,
        twoUCL: this.two_sigma_UCL_flag_mem_swap,
        oneLCL: this.one_sigma_LCL_flag_mem_swap,
        oneUCL: this.one_sigma_UCL_flag_mem_swap
       })
      
      
      
    }
    }
  
  
 save(customerForm: NgForm) {
    console.log(customerForm.form);
    
    console.log('Saved: ' + JSON.stringify(customerForm.value));
    // if(window.location.host == "localhost:4200"){
    //   let dataObj = this.localObj.MyLocalChartData;
    //   this.updatechartLabels(dataObj.res, customerForm.form.value.addressType)
    // }
    // else{
      this.ser.getData(customerForm.value).subscribe((data1) => {
        console.log(data1);
       
             this.updatechartLabels(data1, customerForm.form.value.addressType);
            
        });

      }
 }

