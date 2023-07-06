import { Component } from '@angular/core';


interface entry {
  title: string;
  date: string;
  picture: string;
  location: string;
  time: string;
  description: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  calendar: entry[] = [
    {
      title: 'example Title',
      date: '2023-06-17',
      picture: 'dummy-picture1.jpg',
      location: 'Dummy Location 1',
      time: '10:00 AM',
      description: 'https://www.nato-leipzig.de/wp-content/uploads/2016_naTo_Nacht-1024x683.jpg'
    },
    {
      title: 'example Title',
      date: '2023-06-18',
      picture: 'dummy-picture2.jpg',
      location: 'Dummy Location 2',
      time: '2:30 PM',
      description: 'https://www.nato-leipzig.de/wp-content/uploads/2016_naTo_Nacht-1024x683.jpg'
    },
    {
      title: 'example Title',
      date: '2023-06-19',
      picture: 'dummy-picture3.jpg',
      location: 'Dummy Location 3',
      time: '8:00 AM',
      description: 'https://www.nato-leipzig.de/wp-content/uploads/2016_naTo_Nacht-1024x683.jpg'
    },
    {
      title: 'example Title',
      date: '2023-06-20',
      picture: 'dummy-picture4.jpg',
      location: 'Dummy Location 4',
      time: '12:00 PM',
      description: 'https://www.nato-leipzig.de/wp-content/uploads/2016_naTo_Nacht-1024x683.jpg'
    }
  ];
}
