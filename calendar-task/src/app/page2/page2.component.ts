import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DataServiceService } from '../data-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  selectedOption: string;
  selectedDate: Date;
  selectedDates: { date: Date, option: string }[] = [];
  showPopup = false;
  datee: Date
  isSelectedDate: boolean = false;
  formattedDate: String;
  radioOptions: string[] = ['Shift A', 'Shift B', 'Shift C']; // Define your radio button options here
  dateIndex: number = 0;
  jsonData: any;
  
  constructor(private router: Router, private dateAdapter: DateAdapter<Date>, private dataService: DataServiceService,private http: HttpClient) {
    this.selectedOption = '';
    
  }

  onDateChange(event: MatDatepickerInputEvent<Date | null>): void {
    this.isSelectedDate = true;
    if (event.value !== null) {
      this.isSelectedDate = true;
      this.selectedDate = event.value;
      this.formattedDate = this.dateAdapter.format(this.selectedDate, 'DD-MM-YYYY');
      this.addSelectedDate();
    } else {
      this.isSelectedDate = false;
    }
    if (this.selectedDate) {
      this.showPopup = true;
      //console.log('selected date:', this.selectedDate)

    } else {
      this.showPopup = false;
    }
  }

  addSelectedDate(): void {
    if (this.selectedDate && this.selectedOption) {
      this.selectedDates.push({ date: this.selectedDate, option: this.selectedOption });
    }
  }

  selectNextDate(): void {
    if (this.isSelectedDate) {
      this.selectedDates.push({ date: this.selectedDate, option: this.selectedOption });
      this.dateIndex++;
      this.selectedDate = new Date();
      this.selectedOption = '';
    }
  }

  closePopup(): void {
    this.showPopup = false;
  }

  // navigateToNextPage() {
  //   this.router.navigate(['/page1']);
  //   if (this.selectedOption || this.selectedDates.length > 0) {
  //     const jsonObject: { [key: string]: any } = {};
  //     for (const entry of this.selectedDates) {
  //       if (entry.date) {
  //         const formattedDate = this.dateAdapter.format(entry.date, 'DD-MM-YYYY');
  //         jsonObject[formattedDate] = entry.option;
  //       }
  //     }
  //     const jsonString = JSON.stringify(jsonObject);
  //     console.log('JSON Object:', jsonString);
  //     emailjs.send('service_f9jjqcv', 'template_1z70ph5', {
  //       to_email: 'pavsz0212@gmail.com', // Replace with the recipient's email address
  //       message: 'Here is the JSON data: ' + jsonString // Replace jsonString with your JSON data
  //     }, 'LbpkSSzuWHoytJV64')
  //       .then((response: EmailJSResponseStatus) => {
  //         console.log('Email sent successfully', response);
  //       }, (error) => {
  //         console.error('Error sending email:', error);
  //       });
  //   }
  //   else {
  //     console.log('No selected dates to submit.');
  //   }
  // }
  
  navigateToNextPage() :void {
    const emailData = {
      to: 'pavsz0212@gmail.com',
      subject: 'JSON Data Email',
      jsonContent: 'Your JSON content here',
    };
    
    // Set the HTTP headers, including the Content-Type header
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.router.navigate(['/page1']);
    if (this.selectedOption || this.selectedDates.length > 0) {
          const jsonObject: { [key: string]: any } = {};
          for (const entry of this.selectedDates) {
            if (entry.date) {
              const formattedDate = this.dateAdapter.format(entry.date, 'DD-MM-YYYY');
              jsonObject[formattedDate] = entry.option;
            }
          }
          const jsonString = JSON.stringify(jsonObject);
          console.log('JSON Object:', jsonString);
    this.http.post('http://localhost:8080/sendJsonEmail',jsonString,httpOptions).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
        // Handle success, e.g., show a success message to the user
      },
      (error) => {
        console.error('Error sending email:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
  else {
    console.log('No selected dates to submit.');
  }
}
  
}



