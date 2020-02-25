import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finder';
  address = [{ label: 'Main Gate', value: 1 },
  {label: 'Patient Admission', value: 2},
  { label: 'Blood Bank', value: 11 },
  { label: 'Gate 2', value: 8 },
  { label: 'UltraSound', value: 4 },
  { label: 'CT Scan', value: 6 },
  { label: 'MRI', value: 7 }, 
  { label: 'Child Development Clinic', value: 12 },
  { label: 'Physiotheraphy', value: 13 },
  { label: 'Lithotripsy', value: 14 },
  { label: 'Urology', value: 15 },
  { label: 'CIC', value: 16 },
  { label: 'Pedeiatric ward', value: 17 },
  { label: 'Genetic LAB', value: 18 },
  { label: 'Molecular LAB', value: 19 },
  { label: 'PET CT', value: 20 },
  { label: 'Billing Counter', value: 21 },
  { label: 'Syndicate Bank', value: 22 },
  { label: 'Parking', value: 9 },
  { label: 'Canteen', value: 5 }];

  from: number = this.address[0].value;
  fromTitle: string = this.address[0].label;
  toTitle: string = this.address[0].label;
  to: number = this.address[0].value;
  imgFlag = true;
  imgURL : string =`./../assets/13.jpg`;
  

  onFromSelect(item: number,label: string) {
    this.fromTitle = label
    this.from = item;
  }

  onToSelect(item: number,label: string) {
    this.toTitle = label
    this.to = item;    
  }

  onSubmit() { 
      this.imgFlag = true;
      this.imgURL = `./../assets/${this.from.toString().concat(this.to.toString())}.jpg`;   
      console.log(this.imgURL,this.imgFlag,'image should be availabe');  
  }
    
  getImg() {
    if(isNullOrUndefined(this.from) && isNullOrUndefined(this.to)) {
      return true;
    } else {
      return false;
    }
  }
}
