import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';
import { NgForm } from '@angular/forms';
import {DataService} from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { IfStmt } from '@angular/compiler';
import { element } from '@angular/core/src/render3/instructions';
import { MyChartLocal } from './my-bar-chart-local.class'
//import {HttpClient} from '@angular/http';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  //chartData = [];
  customer = new Customer();
  //arrBirds: any =  [];

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

public localObj = new MyChartLocal();

//123, system

two_sigma_UCL_flag_cpu_raw_system1: number=0;
two_sigma_LCL_flag_cpu_raw_system1: number=0;

three_sigma_UCL_flag_cpu_raw_system1: number=0;
three_sigma_LCL_flag_cpu_raw_system1: number=0;

one_sigma_UCL_flag_cpu_raw_system1: number=0;
one_sigma_LCL_flag_cpu_raw_system1: number=0;
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

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true

    
  };
 // bird one
//  constructor (private httpService: HttpClient) { }
//  arrBirds: string [];

public ID= [];
  public week = [];
  resultValues : any = [];
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
 // public barChartLabels;
  public barChartData;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'CPU System'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'CPU user'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'CPU nice'},

  // ];

  // "res": [
  //   {"Time_Stamp":"2017-11-29","week":48,"mem_real_used":21.1641931629,"mem_swap_used":0.0,"ID":0,"warning_flag_mem_real_used":false,"critical_flag_mem_real_used":false,"successive_diff_flag_mem_real_used":false,"correlation_mem_real_used":null,"coeff_mem_real_used":null,"warning_flag_mem_swap_used":false,"critical_flag_mem_swap_used":false,"successive_diff_flag_mem_swap_used":false,"correlation_mem_swap_used":null,"coeff_mem_swap_used":null,"three_sigma_LCL_mem_real_used":21.042,"three_sigma_UCL_mem_real_used":21.564,"two_sigma_LCL_mem_real_used":21.129,"two_sigma_UCL_mem_real_used":21.477,"one_sigma_LCL_mem_real_used":21.216,"one_sigma_UCL_mem_real_used":21.39,"three_sigma_LCL_mem_swap_used":0.0,"three_sigma_UCL_mem_swap_used":0.0,"two_sigma_LCL_mem_swap_used":0.0,"two_sigma_UCL_mem_swap_used":0.0,"one_sigma_LCL_mem_swap_used":0.0,"one_sigma_UCL_mem_swap_used":0.0,"two_sigma_UCL_flag_mem_real_used":null,"two_sigma_LCL_flag_mem_real_used":null,"three_sigma_UCL_flag_mem_real_used":null,"three_sigma_LCL_flag_mem_real_used":null,"one_sigma_UCL_flag_mem_real_used":null,"one_sigma_LCL_flag_mem_real_used":null,"two_sigma_UCL_flag_mem_swap_used":null,"two_sigma_LCL_flag_mem_swap_used":null,"three_sigma_UCL_flag_mem_swap_used":null,"three_sigma_LCL_flag_mem_swap_used":null,"one_sigma_UCL_flag_mem_swap_used":null,"one_sigma_LCL_flag_mem_swap_used":null}, 

  // for a while santosh data
   constructor(private ser: DataService) {   }
  //  arrBirds: string [];
   
  // constructor(private httpService: Http) {


  //   }

    
    
    // arrBirds: string [];
    // ngOnInit () {
    //   this.httpService.get('./assets/data/Bird.json').subscribe(
    //     data => {

    //     //  console.log(this.arrBirds[1]);
    //     this.resultValues = data;
    //     this.arrBirds = this.resultValues._body;
        
    //     console.log(this.arrBirds, "arr birds");
          
          // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
  //       },
       
  //     );
  //   }
  // }
    

   ngOnInit() {
    // this.ser.getData(data).subscribe((data1) => {
    //      this.updatechartLabels(data1);
    //      //this.getTrueCount(data1);
    // });
 
      this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      this.barChartData  =  [
          {data: [], label: 'cpu_raw_system'},
          {data: [], label: 'cpu_raw_user'},
          {data: [], label: 'cpu_raw_nice'},
          
        ];
  }

  // if (id==1)

  //{
// 
  //}

  updatechartLabels(data1){

   // var alphas:string[]; 

  //  let  CPU = ["warning_flag_cpu_raw_system"] ;
  //  let memory=["warning_flag_mem_real_used"];
  //  let disk=["warning_flag_disk_root"];

   


  //  data1.forEach(element => {
  //     if(this.week.indexOf('week '+ element.week) == -1){
  //       this.week.push('week '+ element.week);
  //     }
  //     this.barChartData[0].data.push(element.cpu_raw_system);
  //     this.barChartData[1].data.push(element.cpu_raw_user);
  //     this.barChartData[2].data.push(element.cpu_raw_nice);
  //     if(element.warning_flag_cpu_raw_system)
  //     {
  //      ++this.numerofwarningsytem;
  //     }
  //   });
  //for a while for demo


    data1.forEach(element => {
        if(this.ID.indexOf('day '+ element.ID) == -1){
          this.ID.push( 'day '+ element.ID);
        }
        this.barChartData[0].data.push(element.cpu_raw_system);
        this.barChartData[1].data.push(element.cpu_raw_user);
        this.barChartData[2].data.push(element.cpu_raw_nice);


        // data1.forEach(element => {
        //   if(this.week.indexOf('week '+ element.week) == -1){
        //     this.week.push('week '+ element.week);
        //   }
        //   this.barChartData[0].data.push(element.cpu_raw_system);
        //   this.barChartData[1].data.push(element.cpu_raw_user);
        //   this.barChartData[2].data.push(element.cpu_raw_nice);
        


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



        if(element.correlation_flag_cpu_raw_system =="POS")
        {
          if(element.coeff_flag_cpu_raw_system==true)
          {
          this.upwardtrendsytem++
              }
          }

          
        if(element.correlation_flag_cpu_raw_system ="NEG" && element.coeff_flag_cpu_raw_system==true)

        {
          ++this.Downwardtrendsystem;
        }



        if(element.correlation_flag_cpu_raw_user="POS" && element.coeff_flag_cpu_raw_user==true)
        {
          ++this.upwardtrenduser
        }

        else (element.correlation_flag_cpu_raw_user="NEG" && element.coeff_flag_cpu_raw_user==true)

        {
          ++this.Downwardtrenduser;
        }


        if(element.correlation_flag_cpu_raw_nice="POS" && element.coeff_flag_cpu_raw_nice==true)
        {
          ++this.upwardtrendnice
        }

        else (element.correlation_flag_cpu_raw_nice="NEG" && element.coeff_flag_cpu_raw_nice==true)

        {
          ++this.Downwardtrendnice;
        }

        // for 1 2 3
        //"two_sigma_UCL_flag_cpu_raw_system":null,
        // "two_sigma_LCL_flag_cpu_raw_system":null,

        // "three_sigma_UCL_flag_cpu_raw_system":null,
        // "three_sigma_LCL_flag_cpu_raw_system":null,

        // "one_sigma_UCL_flag_cpu_raw_system":null,
        // "one_sigma_LCL_flag_cpu_raw_system":null,
        // two_sigma_UCL_flag_cpu_raw_system1: number=0;
        // two_sigma_LCL_flag_cpu_raw_system1: number=0;

        // three_sigma_UCL_flag_cpu_raw_system1: number=0;
        // three_sigma_LCL_flag_cpu_raw_system1: number=0;

        // one_sigma_UCL_flag_cpu_raw_system1: number=0;
        // one_sigma_LCL_flag_cpu_raw_system1: number=0;
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
          ++this.three_sigma_UCL_flag_cpu_raw_system1;

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


      });
    console.log(this.barChartData);
  }
  
  
 save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
    // if(window.location.host == "localhost:4200"){
    //   let dataObj = this.localObj.MyLocalChartData;
    //   this.updatechartLabels(dataObj.res)
    // }
    // else{
      this.ser.getData(customerForm.value).subscribe((data1) => {
        console.log(data1);
             this.updatechartLabels(data1);
             //this.getTrueCount(data1);
        });
      }
    }
  